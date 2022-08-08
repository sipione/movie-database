import styled from "styled-components";
import { PrimaryColorHex, SecondaryColorHex } from "../../common/foundation/variables";
import texture from "../../assets/images/texture.jpg";

export const StatsAltContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5vh 2.5vw;
    background: url(${texture});
    
    .title--h1{
        color: ${PrimaryColorHex};
        text-align: center;
        text-decoration: underline;
    }

    .title--chat{
        margin-top: 5vh;
    }

    svg{
        border-radius: 5px;
        border: 2px dashed ${SecondaryColorHex};
    }

    g rect{
        fill: ${PrimaryColorHex};
        transition: 0.5s;

        :hover{
            fill: ${SecondaryColorHex};
        }
    }
`;