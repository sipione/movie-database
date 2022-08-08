import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextBodyP, TextTitleH1, TextTitleH2, TextTitleH3, TextTitleH4 } from "../../common/foundation/typography";
import { AvatarBaseUrl, ImageBaseUrl } from "../../common/foundation/variables";
import { DetailsContainer, ContentInfo, DetailsCtnPoster, InfoProductionCard, DetailsInfoReviews, DetailsCtnContent, DetailsRelatedMovies, DatailsAvaliation, AvaliationRateStars, AvaliationRateInputs, ContentBodyTexts, ContentBodyVideo, DetailsGallery } from "./style";
import camera from "../../assets/images/camera.svg";
import env from "react-dotenv";
import ComponentCtnMviesSlider from "../../components/ctnMoviesSlider";
import {ReactComponent as Star} from "../../assets/images/star.svg";
import {ReactComponent as Plus} from "../../assets/images/plus.svg";
import {ReactComponent as Less} from "../../assets/images/less.svg";

const PageDetails = ()=>{
    const [movie, setMovie] = useState(false);
    const [reviews, setReviews]=useState(null);
    const [recommendations, setRecommendations] = useState(null);
    const [related, setRelated] = useState(null);
    const [rate, setRate] = useState(10.0);
    const [gallery, setGallery]=useState(null);
    const {id}=useParams();
    console.log(gallery);
    
    useEffect(()=>{
        getMovieById(id);
        getReviews(id);
        getRecommendations(id);
        getRelated(id);
        getImages(id)
    }, [id])

    const getMovieById= async(id)=>{
        const uri =`https://api.themoviedb.org/3/movie/${id}?api_key=${env.API_KEY}&language=pt-PT`;

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

    const getRecommendations= async(id)=>{
        const uri =`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${env.API_KEY}&language=pt-Pt`;

        const options = {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            setRecommendations(dataJson);
        }catch(err){
            console.log(err);
        }

    }

    const getRelated= async(id)=>{
        const uri =`
        https://api.themoviedb.org/3/movie/${id}/similar?api_key=${env.API_KEY}&language=pt-PT`;

        const options = {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            setRelated(dataJson);

        }catch(err){
            console.log(err);
        }

    }

    const postMovieRate = async()=>{
        const guestSessionId = await getGuestId();
        
        const uri = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${env.API_KEY}&guest_session_id=${guestSessionId}`;
        
        const body = JSON.stringify({"value": rate});
        
        const options ={
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:body
        }
        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();

            if(dataJson.success){
                alert("Sua avaliação foi enviada com sucesso")
            }else{
                alert("Algo deu errado, tente novamente mais tarde")
            }

        }catch(err){
            console.log(err)
        }
    }

    const getGuestId = async()=>{
        const uri =`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${env.API_KEY}`;

        const options = {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            return(dataJson.guest_session_id);

        }catch(err){
            console.log(err);
        }
    }

    const getImages = async(id)=>{

        const uri =`https://api.themoviedb.org/3/movie/${id}/images?api_key=${env.API_KEY}`;

        const options = {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const response = await fetch(uri, options);
            const dataJson = await response.json();
            setGallery(dataJson);

        }catch(err){
            console.log(err);
        }
    }

    if(!movie 
        || !reviews 
        || !recommendations
        || !related
        || !rate
        || !gallery){
        return <h1>Loading...</h1>
    }

    return(
        <DetailsContainer>
            <DetailsCtnContent bg={ImageBaseUrl(1280, movie.backdrop_path)}>
                <div className="content__title">
                    <TextTitleH1 className="title__h1">{movie.title}</TextTitleH1>
                    <TextTitleH2 className="title__h2">{movie.tagline}</TextTitleH2>
                </div>

                <div className="content__body">

                    <ContentBodyTexts>

                        <ContentInfo>
                            <TextTitleH4>Gêneros: </TextTitleH4>
                            <TextBodyP>{movie.genres.map(item=>item.name+" ")}</TextBodyP>
                        </ContentInfo>

                        <ContentInfo>
                            <TextTitleH4>Duração: </TextTitleH4>
                            <TextBodyP>{movie.runtime} minutos</TextBodyP>
                        </ContentInfo>
                        
                        <ContentInfo>
                            <TextTitleH4>Nome Original: </TextTitleH4>
                            <TextBodyP>{movie.original_title}</TextBodyP>
                        </ContentInfo>

                        <ContentInfo>
                            <TextTitleH4>Orçamento: </TextTitleH4>
                            <TextBodyP>$ {movie.budget}</TextBodyP>
                        </ContentInfo>

                        <ContentInfo>
                            <TextTitleH4>Receita: </TextTitleH4>
                            <TextBodyP>$ {movie.revenue}</TextBodyP>
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

                    </ContentBodyTexts>
                    
                    <ContentBodyVideo>
                            <img src={ImageBaseUrl(1280, movie.poster_path)}/>
                    </ContentBodyVideo>
                </div>

            </DetailsCtnContent>

            <DatailsAvaliation>
                <TextTitleH4>Qual a sua avaliação?</TextTitleH4>

                <AvaliationRateStars rate={rate}>
                    <div className="drapery"/>
                    <div className="rate">
                        
                        {
                           [...Array(11).keys()].slice(1).map(item=><Star/>) 
                        }
                        
                    </div>
                </AvaliationRateStars>
                
                <AvaliationRateInputs>
                    <Less onClick={()=>{
                        if(rate>0){
                            setRate((Number(rate)-0.1).toFixed(1))
                        }
                    }}/>

                    <input 
                        placeholder={rate} 
                        type="number" 
                        min="0.0" 
                        max="10"
                        onChange={(event)=>{
                            if(10>=event.target.value>=0){
                                setRate(Number(event.target.value).toFixed(1))
                            }
                        }}
                        onBlur={event=>event.target.value=""}
                    />

                    <Plus onClick={()=>{
                        if(rate<10.0){
                            setRate((Number(rate)+0.1).toFixed(1))
                        }
                    }}/>

                    <button onClick={()=>postMovieRate()}>Avaliar</button>
                </AvaliationRateInputs>
            </DatailsAvaliation>

            <TextTitleH3>Galeria de posters</TextTitleH3>
            <DetailsGallery>
                {gallery.posters.slice(0,19).map(item=><a href={ImageBaseUrl(300, item.file_path)} target="__blank"><img src={ImageBaseUrl(300, item.file_path)}/></a>)}
            </DetailsGallery>

            <TextTitleH3>Galeria de banners</TextTitleH3>
            <DetailsGallery>
                {gallery.backdrops.slice(0,19).map(item=><a href={ImageBaseUrl(1280, item.file_path)} target="__blank"><img src={ImageBaseUrl(300, item.file_path)}/></a>)}
            </DetailsGallery>
            
            <TextTitleH3>Filmes recomendados: </TextTitleH3>
            <ComponentCtnMviesSlider data={recommendations}/>

            <TextTitleH3>Filmes relacionados: </TextTitleH3>
            <ComponentCtnMviesSlider data={related}/>

            <DetailsInfoReviews>
            <TextTitleH3>O que estão dizendo?</TextTitleH3>
                {reviews?.results.map(item=>{
                    const avatar = item.author_details.avatar_path?.replace("/https://www.gravatar.com/avatar", "") || camera;

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
            </DetailsInfoReviews>
        </DetailsContainer>

    )
}

export default PageDetails;