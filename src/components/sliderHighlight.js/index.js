import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextBodyP, TextTitleH3 } from "../../common/foundation/typography";
import { ContainerContent, ContainerNavigation, ContentImage, ContentText, SliderContainer } from "./style";
import { ReactComponent as NavIcon } from "../../assets/images/slider-nav.svg";
import { ImageBaseUrl } from "../../common/foundation/variables";
import backdrop from "../../assets/images/backdrop.jpg"
import poster from "../../assets/images/poster.jpg"


const ComponentSlider = ({data})=>{
    const [index, setIndex] = useState(0);
    const [mouseIn, setMouseIn] = useState(false);
    const [intervalId, setIntervalId] = useState();

    useEffect(()=>{
        const timeId = setTimeout(()=>{
            if(data && !mouseIn){
                data.length -1 == index
                ? setIndex(0)
                : setIndex(1+index)
            }
        }, 3000)  
        setIntervalId(timeId);
    }, [data, index, mouseIn])
    
    return(
        <SliderContainer 
            image={data[index]?.backdrop_path ? ImageBaseUrl(1280,data[index].backdrop_path) : backdrop}
            onMouseEnter={()=>{
                clearTimeout(intervalId)
                setMouseIn(true)
            }}
            onMouseLeave={()=>setMouseIn(false)}
        >
            <Link to={`/movie/${data[index]?.id}`}>
            <ContainerContent>
                <ContentImage image={data[index]?.poster_path ? ImageBaseUrl(300, data[index].poster_path) : poster}/>

                <ContentText rate={data[index]?.vote_average}>
                    <TextTitleH3>{data[index]?.title}</TextTitleH3>
                    <TextBodyP> Lançamento: {data[index]?.release_date}</TextBodyP>
                    
                    <div className="rate">
                        <TextBodyP>Avaliação: {data[index]?.vote_average}</TextBodyP>
                        <span/>
                    </div>
                    
                    <TextBodyP>Pontos de popularidade: {data[index]?.popularity}</TextBodyP>
                </ContentText>
            </ContainerContent>
            </Link>

            <ContainerNavigation>
                {
                    data.map((item,i)=> 
                        <div key={item.title}>
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
                        </div>
                    )
                }
            </ContainerNavigation>
        </SliderContainer>
    )
}

export default ComponentSlider;