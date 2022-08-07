import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextBodyP, TextTitleH3 } from "../../common/foundation/typography";
import { ContainerContent, ContainerNavigation, ContentImage, ContentText, SliderContainer } from "./style";
import { ReactComponent as NavIcon } from "../../assets/images/slider-nav.svg";


const ComponentSlider = ({data})=>{
    const [index, setIndex] = useState(0);
    const [mouseIn, setMouseIn] = useState(false);
    const [intervalId, setIntervalId] = useState();

    useEffect(()=>{
        const timeId = setTimeout(()=>{
            if(data && !mouseIn){
                data.results.slice(0,5).length -1 == index
                ? setIndex(0)
                : setIndex(1+index)
            }
        }, 3000)  
        setIntervalId(timeId);
    }, [data, index, mouseIn])
    
    return(
        <SliderContainer 
            image={`https://image.tmdb.org/t/p/w300${data.results[index].backdrop_path}`}
            onMouseEnter={()=>{
                clearTimeout(intervalId)
                setMouseIn(true)
            }}
            onMouseLeave={()=>setMouseIn(false)}
        >
            <Link to={`/movie/${data.results[index].id}`}>
            <ContainerContent>
                <ContentImage image={`https://image.tmdb.org/t/p/w300${data.results[index].poster_path}`}/>

                <ContentText rate={data.results[index].vote_average}>
                    <TextTitleH3>{data.results[index].title}</TextTitleH3>
                    <TextBodyP> Lançamento: {data.results[index].release_date}</TextBodyP>
                    
                    <div className="rate">
                        <TextBodyP>Avaliação: {data.results[index].vote_average}</TextBodyP>
                        <span/>
                    </div>
                    
                    <TextBodyP>Vizualizações: {data.results[index].popularity}</TextBodyP>
                </ContentText>
            </ContainerContent>
            </Link>

            <ContainerNavigation>
                {
                    data.results.slice(0, 5).map((item,i)=>{
                        return(
                            <>
                                <input 
                                    type='radio'
                                    id={item.title}
                                    name="slider"
                                    onChange={event=>setIndex(i)}
                                />

                                <label
                                    className={index == i ? "select" : ""}
                                    htmlFor={item.title}
                                >
                                    <NavIcon className="nav-icon"/>
                                </label>
                            </>
                        )
                    })
                }
            </ContainerNavigation>
        </SliderContainer>
    )
}

export default ComponentSlider;