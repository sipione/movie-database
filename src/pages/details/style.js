import styled from "styled-components";
import { ComplementaryColorHex, ComplementaryColorRgba, MainColorHex, MainColorRgba, PrimaryColorHex, PrimaryColorRgba, SecondaryColorHex } from "../../common/foundation/variables";

export const DetailsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .title--h1{
        text-align: center;
        color: ${MainColorHex};
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
        background: ${PrimaryColorRgba(0.6)};
        backdrop-filter: blur(3px);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }

`;

export const ContentInfo = styled.div`
    width: 60%;
    
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

export const InfoReviews = styled.div`
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