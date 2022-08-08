import styled from "styled-components";
import { MainColorHex, PrimaryColorHex, SecondaryColorHex } from "../../common/foundation/variables";


export const FilterContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2.5vh 2.5vw;

    button{
        margin: 0 2vw;
        padding: 0.5%;
        background: none;
        outline: none;
        border: 2px solid ${PrimaryColorHex};
        border-radius: 5px;
        transition: 0.5s;
        cursor: pointer;

        :hover{
            color: ${MainColorHex};
            background: ${PrimaryColorHex};
        }
    }
`;

export const FilterSortField = styled.div`
    select{
        padding: 0.5% 0;
        border-radius: 5px;
        margin-right:2vw;
        border: 1px solid ${PrimaryColorHex};
        
        :focus{
            border: none;
            outline: 1px solid ${SecondaryColorHex};
        }
    }
`;

export const FilterSearchField = styled.div`

    input{
        padding: 1%;
        border: 1px solid ${PrimaryColorHex};
        border-radius: 5px;
    }

    input:focus{
        border: none;
        outline: 1px solid ${SecondaryColorHex};
    }
`;