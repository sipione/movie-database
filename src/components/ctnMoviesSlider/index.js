import { Link } from "react-router-dom";
import { TextBodyP, TextTitleH4 } from "../../common/foundation/typography";
import { ImageBaseUrl } from "../../common/foundation/variables";
import { CardContent, CardImg, CtnMovieSliderCard, CtnMoviesSliderContainer } from "./style";
import poster from "../../assets/images/poster.jpg";


const ComponentCtnMviesSlider = ({data})=>{

    return(
        <CtnMoviesSliderContainer>
        {data?.results?.map(item=>
            <CtnMovieSliderCard key={item.id}><Link to={`/movie/${item.id}`}>
                <CardImg backdrop={item.poster_path ? ImageBaseUrl(300, item.poster_path) : poster}/>

                <CardContent rate={item.vote_average}>
                    <TextTitleH4>{item.title}</TextTitleH4>                        
                    <div className="rate">
                        <TextBodyP>Avaliação: {item.vote_average}</TextBodyP>
                        <span/>
                    </div>  
                </CardContent>
            </Link></CtnMovieSliderCard>
        )}
        </CtnMoviesSliderContainer>
    )
}

export default ComponentCtnMviesSlider;