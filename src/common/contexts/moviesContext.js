import { createContext, useEffect, useState } from "react";
import env from "react-dotenv";


export const MoviesContext = createContext();

const MoviesContextProvider = ({children})=>{
    const [topMoviesData, setTopMoviesData] = useState();
    const [moviesData, setMoviesData] = useState();
    const [loading, setLoading] = useState(true);
    const [pagesInfo, setPagesInfo] = useState({current: 1, total: 500});
    const [sortRule, setSortRule] = useState("popularity.desc")
    const [genreSelected, setGenreSelected]= useState();
    const [search, setSearch]= useState(null)


    useEffect(()=>{
        search
        ? getMoviesBySearch()
        : getAllMovies()
    }, [pagesInfo])

    const getAllMovies = async(page=pagesInfo.current, sortBy=sortRule, genre=genreSelected)=>{
        setLoading(true)
        
        const today = new Date();
        const month = today.getMonth()+1 < 10 ? "0"+(today.getMonth()+1) : today.getMonth()+1;
        const day = today.getDate() < 10 ? "0"+today.getDate() : today.getDate();
        const todayFormated = `${today.getFullYear()}-${month}-${day}`;

        try{
            const uri = `https://api.themoviedb.org/3/discover/movie?api_key=${env.API_KEY}&language=pt-br&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&release_date.lte=${todayFormated}`;
            const response = await fetch(uri)
            const dataJson = await response.json()
            setMoviesData(dataJson)

            if(page===1){
                setTopMoviesData(dataJson.results.slice(0,5))
            }
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    const getTrendMovies = async(period="day")=>{
        setLoading(true)

        try{
            const uri = `https://api.themoviedb.org/3/trending/movie/${period}?api_key=${env.API_KEY}`;
            const response = await fetch(uri)
            const dataJson = await response.json()
            setMoviesData(dataJson)
            setTopMoviesData(dataJson.results.slice(0,5))

        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    const getMoviesBySearch = async(query=search, page=pagesInfo.current)=>{
        setLoading(true)
        
        const uri = `https://api.themoviedb.org/3/search/movie?api_key=${env.API_KEY}&language=pt-PT&query=${query}&page=${page}&include_adult=false`
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            setMoviesData(dataJson)
            
            if(page===1){
                console.log(dataJson)
                setTopMoviesData(dataJson.results.slice(0,5));
                
            }

        }catch(err){
            console.log(err)
        }
        
        setLoading(false)
    }

    return(
        <MoviesContext.Provider value={{
            moviesData, 
            loading,
            topMoviesData,
            pagesInfo,
            sortRule,
            search, 
            getAllMovies,
            getTrendMovies,
            getMoviesBySearch, 
            setPagesInfo,
            setSortRule,
            setGenreSelected,
            setSearch 
        }}>
            {children}
        </MoviesContext.Provider>
    )

}

export default MoviesContextProvider;