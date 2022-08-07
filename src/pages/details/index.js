import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextBodyP, TextTitleH1, TextTitleH2, TextTitleH3, TextTitleH4 } from "../../common/foundation/typography";
import { AvatarBaseUrl, ImageBaseUrl } from "../../common/foundation/variables";
import { DetailsContainer, ContentInfo, DetailsCtnPoster, InfoProductionCard, InfoReviews, DetailsCtnContent } from "./style";
import camera from "../../assets/images/camera.svg";
import env from "react-dotenv";

const PageDetails = ()=>{
    const [movie, setMovie] = useState(false);
    const [reviews, setReviews]=useState(null)
    const {id}=useParams();
    
    useEffect(()=>{
        getMovieById(id);
        getReviews(id);
    }, [])

    const getMovieById= async(id)=>{
        const uri =`https://api.themoviedb.org/3/movie/${id}?api_key=${env.API_KEY}&language=pt-pt`;

        const options = {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            setMovie(dataJson);
        }catch(err){
            console.log(err);
        }

    }

    const getReviews = async(id)=>{
        const uri = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${env.API_KEY}`
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            setReviews(dataJson);
        }catch(err){
            console.log(err)
        }
    }

    if(!movie){
        return <h1>Loading...</h1>
    }

    return(
        <DetailsContainer>
            <DetailsCtnContent bg={ImageBaseUrl(1280, movie.backdrop_path)}>
            <TextTitleH1 className="title--h1">{movie.title}</TextTitleH1>

                <ContentInfo>
                    <TextTitleH4>Gêneros: </TextTitleH4>
                    <TextBodyP>{movie.genres.map(item=>item.name+" ")}</TextBodyP>
                </ContentInfo>
                
                <ContentInfo>
                    <TextTitleH4>Nome Original: </TextTitleH4>
                    <TextBodyP>{movie.original_title}</TextBodyP>
                </ContentInfo>

                <ContentInfo>
                    <TextTitleH4>Sinopse: </TextTitleH4>
                    <TextBodyP>{movie.overview.length < 5 ? "não há" : movie.overview}</TextBodyP>
                </ContentInfo>

                <ContentInfo>
                    <TextTitleH4>Pontos de popularidade: </TextTitleH4>
                    <TextBodyP>{movie.popularity}</TextBodyP>
                </ContentInfo>

                <ContentInfo>
                    <TextTitleH4>Lingua Original: </TextTitleH4>
                    <TextBodyP>{movie.original_language}</TextBodyP>
                </ContentInfo>

                <ContentInfo>
                    <TextTitleH4>Produtores: </TextTitleH4>
                    <div className="info-production">
                        {movie.production_companies.map(item=>
                            item.logo_path
                            ?<img src={ImageBaseUrl(154, item.logo_path)}/>
                            :<TextBodyP>{item.name}</TextBodyP>
                        )
                        }
                    </div>

                </ContentInfo>
            </DetailsCtnContent>
            
            <InfoReviews>
            <TextTitleH3>O que estão dizendo?</TextTitleH3>
                {reviews?.results.map(item=>{
                    const avatar = item.author_details.avatar_path?.replace("/https://www.gravatar.com/avatar", "") || camera;
                    console.log(avatar)

                    return(
                        <div className="review">
                            <img src={AvatarBaseUrl(avatar)}/>
                            <div>
                                <TextTitleH4 className="title--review">{item.author}</TextTitleH4>
                                <TextBodyP>"{item.content}"</TextBodyP>
                            </div>
                        </div>
                    )
                })}
            </InfoReviews>
        </DetailsContainer>

    )
}

export default PageDetails;