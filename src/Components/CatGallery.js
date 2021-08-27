import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    padding: 0;
    width:98%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto 32px auto;

    li {
        background: #0099cc;
        width: 22.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        padding: 8px;
    
        @media (max-width: 991.98px) { 
            width: 30%;
            margin-bottom: 14px;
        }
    
        @media (max-width: 904.98px) {
            width: 46%;
            margin-bottom: 14px;
    
        }
    
        @media (max-width: 575.98px) {
            width: 93%;
            margin-bottom: 12px;
        }
    
        @media (min-width: 1600px) {
            width: 18%;
            margin-bottom: 18px;
        }
    
        img {
            width: 100%;
            display: flex;
            max-height: 250px;

            @media (max-width: 575.98px) {
                max-height: 350px;
            }
        }
    }
`;

const CatGallery = ({ cats }) => {
    return(
        <List>
            { cats.map(cat => <li key={cat.id}><img src={cat.url} /></li>) }
        </List>
    )
}

export default CatGallery;