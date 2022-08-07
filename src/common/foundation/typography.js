import styled from "styled-components";
import { FontFamilyBody, FontFamilyTitle, FontSizeRatioBody, FontSizeRatioH1, FontSizeRatioH2, FontSizeRatioH3, FontSizeRatioH4, MobileMaxWidth } from "./variables";

export const TextTitleH1 = styled.h1`
    font-size: ${FontSizeRatioH1 * 2}vw;
    font-weight: 600;
    font-family: ${FontFamilyTitle};

    @media screen and (min-width: ${MobileMaxWidth}px){
        font-size: ${FontSizeRatioH1/1.5}vw;
    }
`

export const TextTitleH2 = styled.h2`
    font-size: ${FontSizeRatioH2 * 2}vw;
    font-weight: 600;
    font-family: ${FontFamilyTitle};

    @media screen and (min-width: ${MobileMaxWidth}px){
        font-size: ${FontSizeRatioH2/1.5}vw;
    }
`

export const TextTitleH3 = styled.h3`
    font-size: ${FontSizeRatioH3 * 2}vw;
    font-weight: 600;
    font-family: ${FontFamilyTitle};

    @media screen and (min-width: ${MobileMaxWidth}px){
        font-size: ${FontSizeRatioH3/1.5}vw;
    }
`

export const TextTitleH4 = styled.h4`
    font-size: ${FontSizeRatioH4 * 2}vw;
    font-weight: 600;
    font-family: ${FontFamilyTitle};

    @media screen and (min-width: ${MobileMaxWidth}px){
        font-size: ${FontSizeRatioH4/1.5}vw;
    }
`

export const TextBodyP = styled.p`
    font-size: ${FontSizeRatioBody * 2}vw;
    font-weight: 600;
    font-family: ${FontFamilyBody};


    @media screen and (min-width: ${MobileMaxWidth}px){
        font-size: ${FontSizeRatioBody/1.5}vw;
    }
`