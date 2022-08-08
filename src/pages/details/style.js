import styled from "styled-components";
import { ComplementaryColorHex, ComplementaryColorRgba, DarkColorHex, MainColorHex, MainColorRgba, MobileMaxWidth, PrimaryColorHex, PrimaryColorRgba, SecondaryColorHex } from "../../common/foundation/variables";

export const DetailsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .content__title{
        
        border-radius: 5px;
    
        .title__h1{
         
            text-align: center;
        }

        .title__h2{
            text-align: center;
            color: ${MainColorHex};
        }
    }

    .content__body{
        display: flex;
        justify-content: space-between;
    }

`;

export const DetailsCtnContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    background: url(${props=>props.bg}) center /cover no-repeat;
    padding: 2.5vh 2.5vw 5vh 2.5vw;
    position: relative;
    z-index:-1;

    ::before{
        content: "";
        background: ${PrimaryColorRgba(0.8)};
        backdrop-filter: blur(5px);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }

`;

export const ContentBodyTexts = styled.div`
    width: 100%;

    @media screen and (min-width: ${MobileMaxWidth}px){
        width: 50%;
    }
`;

export const ContentInfo = styled.div`
    width: 100%;
    
    p{
        color: ${MainColorHex};
    }

    .info-production{
        display: flex;
        flex-direction: column;
        gap: 2vh;

        img{
            width:150px;
        }
    }
`;

export const ContentBodyPoster = styled.div`
    display: none;

    @media screen and (min-width: ${MobileMaxWidth}px){
        display:block;
        width: 40%;

        img{
            border-radius: 5px;
            height: 100%;
            max-width: 100%;
        }
    }
`;

export const DatailsAvaliation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${PrimaryColorHex};
    padding: 5vh 0;
    margin-bottom: 5vh;
`;

export const AvaliationRateStars = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    position: relative;

    .rate{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .drapery{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: ${props=>(10 - Number(props.rate))*10}%;
        background: ${PrimaryColorHex};
        z-index: 1;
        transition: 1s;
    }
`

export const AvaliationRateInputs = styled.div`
    width: 100%;
    display: flex;
    gap: 2.5vw;
    justify-content: center;
    align-items:center;

    svg{
        width: 20px;
        height: auto;
        cursor: pointer;
    }

    input{
        padding: 0.5%;
        border-radius:5px;
        outline: none;
        border: 1px solid ${SecondaryColorHex};
        background: none;
        color: ${MainColorHex};

        ::placeholder{
            color: ${MainColorHex};
        }
    }

    button{
        margin-left: 15vw;
        padding: 1%;
        background: none;
        border: 1px solid ${SecondaryColorHex};
        border-radius: 5px;
        color: ${MainColorHex};
        cursor: pointer;
        transition: 0.5s;

        :hover{
            background: ${SecondaryColorHex};
            color: ${DarkColorHex};
        }
    }

    @media screen and (min-width: ${MobileMaxWidth}px){
        button{
            margin-left: 2.5vw;
        } 
    }
`;

export const DetailsGallery = styled.div`
    display: flex;
    gap: 2.5vw;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 5vh;

    a{
        max-height: 100%;
    }

    img{
        height: 100%;
        max-height: 100%;
        max-width: 25vw;
    }
`;

export const DetailsInfoReviews = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 5vh 2.5vw;

    .review{
        width: 100%;
        display: flex;
        gap: 2vw;

        .title--review{
            color: ${PrimaryColorHex};
        }

        p{
            max-height: 30vh;
            overflow: auto;
        }

        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
`; 