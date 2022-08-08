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