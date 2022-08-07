import styled from "styled-components";
import { DarkColorHex, MainColorHex, MobileMaxWidth, PrimaryColorHex, SecondaryColorHex } from "../../common/foundation/variables";

export const SliderContainer = styled.section`
    height: 100%;
    padding: 2.5%;
    background: url(${props=>props.image}) center / cover no-repeat;
    align-items: center;
    justify-content: start;
    position: relative;
    border-radius: 5px;
    z-index: 1;
    height: 80vh;
    overflow: hidden;

    a{
        width:100%;
        height:90%;
        transition: 0.5s;
        padding: 1%;
        border-radius: 5px;
        display: flex;
        color: ${DarkColorHex};
    }

    :before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.8;
        backdrop-filter: blur(5px);
        border-radius: 5px;
        z-index: -1;
    }

    :after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: ${MainColorHex};
        opacity: 0.8;
        border-radius: 5px;
        z-index: -1;
    }

    @media screen and (min-width: ${MobileMaxWidth}px){
        justify-content: center;

        a{
            width:60%;

            :hover{
                transform: scale(1.01);
                color: ${MainColorHex};
                background: ${SecondaryColorHex};
            }
        }
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 100%;
    height: 100%;
    justify-content: start;
    align-items: center;
    z-index: 1;

    @media screen and (min-width: ${MobileMaxWidth}px){
        width: 90%;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
        gap: 0vh;
    }
`; 

export const ContentImage = styled.div`
    width: 80%;
    height:70%;
    background: url(${props=>props.image}) center / cover no-repeat;
    border-radius: 5px;

    @media screen and (min-width: ${MobileMaxWidth}px){
        width: 45%;
        height:100%;
    }
`;

export const ContentText = styled.div`
    width: 100%;
    height:10%;
    display: flex;
    flex-direction: column;
    gap: 1vh;

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

    h3{
        color: ${PrimaryColorHex};
    }

    @media screen and (min-width: ${MobileMaxWidth}px){
        width: 50%;
        height:auto;
        gap: 5vh;
    }
`;

export const ContainerNavigation = styled.div`
    display: flex;
    
    justify-content: space-evenly;
    position: absolute;
    bottom: 2.5%; 
    right: 2.5%;
    left: 2.5%;
    z-index: 1;

    input{
        display: none;
    }

    label{
        cursor: pointer;

        .nav-icon{
            width: 20px;
            height: auto;
            fill: ${PrimaryColorHex};
            fullfill: red;
        }
    }

    .select .nav-icon{
        fill: ${SecondaryColorHex};
    }

    @media screen and (min-width: ${MobileMaxWidth}px){
        flex-direction: column;
        top: 2.5%;
        bottom: 2.5%; 
        right: 2.5%;
        left: 92.5%;
    }
`;