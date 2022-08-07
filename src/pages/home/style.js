import styled from "styled-components";
import { DarkColorHex, MainColorHex, MobileMaxWidth, PrimaryColorHex, SecondaryColorHex } from "../../common/foundation/variables";


export const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 2.5vh 0;

    h2{
        margin-bottom: 2.5vh;
    }

    .title-all-movies{
        margin: 7.5vh 0 2vh 0;
    }
`;

export const HomeCtnMovies = styled.div`
    width: 100%;
    display: flex;
    gap: 5vw;
    overflow-x: auto;
    margin-bottom: 5vh;

    @media screen and (min-width:${MobileMaxWidth}px){
        gap: 2.5vw;
    }
`

export const HomeCard = styled.div`
    width: 200px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 1%;
    transition: 0.5s;

    a{
        color: ${DarkColorHex};
    }

    @media screen and (min-width:${MobileMaxWidth}px){
        width: 20vw;


        :hover{
            background: ${PrimaryColorHex};
            border-radius: 5px;

            a{
                color: ${MainColorHex};
            }
        }
    }
`

export const CardImg = styled.div`
    height: 30vh;
    width: 100%;
    flex-shrink: 0;
    background: url(${props=>props.backdrop}) center / cover no-repeat;
    border-radius: 5px;
    
    @media screen and (min-width:${MobileMaxWidth}px){
        height: 40vh;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    max-height: 20vh;
    overflow-y: auto;

    .rate{
        position: relative;
        margin-bottom: 2vh;

        span{
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(90deg, ${props=>props.rate<5?"red":props.rate<8?"yellow":"green"} ${props=>props.rate*10}%, ${DarkColorHex} ${props=>props.rate*10}%);
            border: 3px solid ${PrimaryColorHex};
            border-radius: 5px;
        }
    }
    @media screen and (min-width:${MobileMaxWidth}px){
       
    }
`;

export const CtnMoviesPagination = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2vw;

    p:not(.no-interactive){
        padding: 2.5px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .current{
        background: ${SecondaryColorHex};
        border-radius: 5px;
        color: ${DarkColorHex};
    }
`;