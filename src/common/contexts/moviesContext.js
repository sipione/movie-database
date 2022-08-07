import { createContext, useEffect, useState } from "react";
import env from "react-dotenv";


export const MoviesContext = createContext();

const MoviesContextProvider = ({children})=>{
    const [topMoviesData, setTopMoviesData] = useState();
    const [moviesData, setMoviesData] = useState();
    const [loading, setLoading] = useState(true);
    const [pagesInfo, setPagesInfo] = useState();

    useEffect(()=>{
        getTopMovies()
        getAllMovies(1)
    }, [])

    useEffect(()=>{
        if(pagesInfo?.current){
            getAllMovies(pagesInfo.current)
        }
    }, [pagesInfo])

    const getAllMovies = async(page)=>{
        setLoading(true)
        try{
            const uri = `https://api.themoviedb.org/3/discover/movie?api_key=${env.API_KEY}&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
            console.log(uri)
            const response = await fetch(uri)
            const dataJson = await response.json()
            setMoviesData(dataJson)
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    const getTopMovies = async()=>{
        setLoading(true)
        try{
            const uri = `https://api.themoviedb.org/3/discover/movie?api_key=${env.API_KEY}&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
            const response = await fetch(uri)
            const dataJson = await response.json()
            setTopMoviesData(dataJson)
            setPagesInfo({current: dataJson.page, total: 500})
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    return(
        <MoviesContext.Provider value={{
            moviesData, 
            setMoviesData, 
            topMoviesData,
            pagesInfo, 
            setPagesInfo, 
            loading
        }}>
            {children}
        </MoviesContext.Provider>
    )

}

export default MoviesContextProvider;