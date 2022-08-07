import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../common/contexts/moviesContext";
import { FilterContainer, FilterSearchField, FilterSortField } from "./style";
import env from "react-dotenv";


const ComponentFilter = ()=>{
    const {getAllMovies, getTrendMovies, sortRule, setSortRule, setGenreSelected, getMoviesBySearch, search, setSearch} = useContext(MoviesContext);
    const [genres, setGenres] = useState([]);
    const[desable, setDesable] = useState(false);

    useEffect(()=>{
        getGenres()
    }, [])

    const getGenres = async()=>{
        try{
            const uri = `https://api.themoviedb.org/3/genre/movie/list?api_key=${env.API_KEY}&language=pt-PT`
            const options = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }
            
            const response = await fetch(uri, options);
            const dataJson = await response.json();

            setGenres(dataJson.genres);
        }catch(err){
            console.log(err)
        }
    }

    const handleMovieSorter = ()=>{

        if(search){
            getMoviesBySearch()
            return
        }

        if(sortRule.includes("trending")){
            getTrendMovies(sortRule.includes("week") ? "week" : "day")
            return
        }

        getAllMovies()
    }

    return(
        <FilterContainer>
            <FilterSortField>
                <select disabled={desable} onChange={(event)=>setSortRule(event.target.value)}>
                <optgroup label="Organizar por:">

                    <option value=""/>
                    <option value="popularity.desc">Mais populares</option>
                    <option value="popularity.asc">Menos populares</option>
                    <option value="vote_average.desc">Melhor avaliados</option>
                    <option value="vote_average.asc">Pior avaliados</option>
                    <option value="release_date.desc">Mais recentes</option>
                    <option value="release_date.asc">Mais antigos</option>
                    <option value="trending_week">Tendências da semana</option>
                    <option value="trending_day">Tendências de hoje</option>
                    <option value="upcoming">Proximos lançamentos -- não funcional</option>
                </optgroup>
                </select>

                <select disabled={desable} onChange={(event)=>setGenreSelected(event.target.value)}>
                <optgroup label="genres">
                    <option value={null}/>
                        {genres?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </optgroup>
                </select>

                <input
                    placeholder={search || "pesquisar"} 
                    onChange={event=>setSearch(event.target.value)} type="search"
                    onFocus={()=>{
                        setDesable(true)
                    }}
                    onBlur={()=>{
                        if(!search){
                            setDesable(false)
                        }
                    }}
                />
                
                <button onClick={(event)=>{
                    event.preventDefault()
                    handleMovieSorter()
                }}>Buscar</button>
            </FilterSortField>

            <FilterSearchField>

            </FilterSearchField>
        </FilterContainer>
    )
}

export default ComponentFilter;