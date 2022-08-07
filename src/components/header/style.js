import styled from "styled-components";
import { MainColorHex, MobileMaxWidth, PrimaryColorHex } from "../../common/foundation/variables";


export const HeaderContainer = styled.header`
    align-items: center;
    background: ${PrimaryColorHex};
    color: ${MainColorHex};
    display: flex;
    justify-content: space-between;
    padding: 1vh 5vw;
    position: relative; 
    width: 100%;

    svg{
        max-height: 5vh;
        width: auto;
    }

    .menuMobile, .git{
        fill: ${MainColorHex};
        height: 3vh;
    }

    img{
        max-height: 5vh;
        border-radius: 50%;
        border: 2px solid ${MainColorHex};
    }

    @media screen and (min-width: ${MobileMaxWidth}px){
        padding: 2vh 2.5vw;

        svg{
            max-height: 10vh;
        }

        .menuMobile{
            display: none;
        }

        .git{
            width: 10%;
            height: 5vh;
        }

        img{
            max-height: 10vh;
        }
    }
`;

export const MenuBox = styled.section`
    background: ${PrimaryColorHex};
    min-width: 20vw;
    padding: 1vh 5vw;
    transition: 0.5s;
    
    position: absolute;
    top: 100%;
    left: ${props=> props.hide ? "-100%" : 0};

    nav{
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    a{
        color: ${MainColorHex};
    }

    @media screen and (min-width: ${MobileMaxWidth}px){
        width: 10%;
        position: static;
        padding: 2vh 2.5vw;

        nav{
            flex-direction: row;
            gap: 5vw;
        }
    }
`

export const GitHubSearch = styled.section`
    background: ${PrimaryColorHex};
    min-width: 20vw;
    padding: 1vh 5vw;
    transition: 0.5s;
    
    position: absolute;
    top: ${props=> props.hide ? "-101%" : "100%"};
    right: 0;

    @media screen and (min-width: ${MobileMaxWidth}px){
        padding: 1vh 1vw;
    }
`