import styled from 'styled-components';
import  media  from "styled-media-query";
export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 2rem;
    ${media.lessThan("large")`
        width: 100%;
    `}
`;


export const Header = styled.header`
    text-align: center;
    
    h1{
        color: #e14283;
    }

    img{
            width: 256px;
            margin: 0 auto;
            border-radius: 50%;
        }
    ul {
        margin: 20px 0;
        li{
            font-size: 18pt;
            color: #e14283;
        }
    }
`;
export const List = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
`;
export const Card = styled.div`
    border: 1px solid #e14283;
    margin: 18px 0;
    width: 30%;
    min-width: 300px;
    padding: 20px 0;
    text-align: center;

    h2{
        margin-bottom: 6px;
        font-size: 16pt;
    }
`;
