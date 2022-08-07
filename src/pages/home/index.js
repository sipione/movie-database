import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../common/contexts/moviesContext";
import { TextBodyP, TextTitleH1, TextTitleH2, TextTitleH3, TextTitleH4 } from "../../common/foundation/typography"
import ComponentSlider from "../../components/sliderHighlight.js";
import { CardContent, CardImg, CtnMoviesPagination, HomeCard, HomeContainer, HomeCtnMovies, HomeCtnTop } from "./style";
import poster from "../../assets/images/poster.jpg";
import { ImageBaseUrl } from "../../common/foundation/variables";
import ComponentFilter from "../../components/filter";

const PageHome = ()=>{
    const {moviesData, topMoviesData, pagesInfo, setPagesInfo, loading} = useContext(MoviesContext);
    console.log(moviesData)
    console.log(new Date().getFullYear())

    const handlePage = (target)=>{
        if(target == "decrease"){
            setPagesInfo({...pagesInfo, current: pagesInfo.current-1})
            return
        }else if(target == "increase"){
            setPagesInfo({...pagesInfo, current: pagesInfo.current+1})
            return
        }
        setPagesInfo({...pagesInfo, current: Number(target)})
    }

    if(loading){
        return <TextTitleH1>Loading...</TextTitleH1>
    }

    return(
        <HomeContainer>
            <ComponentSlider data={topMoviesData}/>

            <TextTitleH3 className="title-all-movies">All Movies</TextTitleH3>
            <ComponentFilter/>
            <HomeCtnMovies>
            {moviesData?.results?.map(item=>
                <HomeCard key={item.id}><Link to={`/movie/${item.id}`}>
                    <CardImg backdrop={item.poster_path ? ImageBaseUrl(300, item.poster_path) : poster}/>

                    <CardContent rate={item.vote_average}>
                        <TextTitleH4>{item.title}</TextTitleH4>                        
                        <div className="rate">
                            <TextBodyP>Avaliação: {item.vote_average}</TextBodyP>
                            <span/>
                        </div>  
                    </CardContent>
                </Link></HomeCard>
            )}
            </HomeCtnMovies>
            
            <CtnMoviesPagination>
                {pagesInfo?.current <= 1 ? null: <p onClick={()=>handlePage("decrease")}>«</p>}

                {pagesInfo?.current - 2 <= 0 ? null : pagesInfo?.current - 2 > 1 ? <p onClick={()=>handlePage(1)}>1</p> : <p>{pagesInfo?.current - 2}</p>}
                
                {pagesInfo?.current>3 ? <p className="no-interactive">...</p>:null}
                
                {pagesInfo?.current-1 <= 0 ? null : <p onClick={()=>handlePage(pagesInfo?.current - 1)}>{pagesInfo?.current - 1}</p>}
                
                <p className="current">{pagesInfo?.current}</p>
                
                {pagesInfo?.current>= pagesInfo.total ? null : <p onClick={()=>handlePage(pagesInfo?.current+1)}>{pagesInfo?.current+1}</p>}
                
                {pagesInfo?.current < pagesInfo?.total-2 ? <p className="no-interactive">...</p>:null}
                
                {pagesInfo?.total-2 <= pagesInfo?.current? null :<p onClick={()=>handlePage(pagesInfo?.total-1)}>{pagesInfo?.total-1}</p>}
                
                {pagesInfo?.total-1 <= pagesInfo?.current? null :<p onClick={()=>handlePage(pagesInfo?.total)}>{pagesInfo?.total}</p>}

                {pagesInfo?.current == pagesInfo?.total ? null: <p onClick={()=>handlePage("increase")}>»</p>}
            </CtnMoviesPagination>
        </HomeContainer>

    )
}

export default PageHome;