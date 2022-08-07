import styled from "styled-components";
import { PrimaryColorHex, SecondaryColorHex } from "../../common/foundation/variables";

export const StatsAltContainer = styled.section`
    display: flex;
    flex-direction: column;

    g rect{
        fill: ${PrimaryColorHex};
        transition: 0.5s;

        :hover{
            fill: ${SecondaryColorHex};
        }
    }
`;