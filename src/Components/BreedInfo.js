import React from 'react';
import styled from 'styled-components';

const InfoSection = styled.ul`
    width: 97%;
    background: #0099cc;
    color: #ffd8d1;
    margin: 0 auto 32px auto;
    padding: 0;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 575.98px) {
        width: 90%;
    }

    li {
        width: 20%;
        padding: 12px 24px;
        list-style: none;

        @media (max-width: 991.98px) { 
        }
    
        @media (max-width: 904.98px) {
            width: 40%;
        }
    
        @media (max-width: 575.98px) {
            width: 50%;
        }
    
        @media (min-width: 1600px) {
            width: 18%;
        }

        span {
            font-weight: 900;
        }
    }
`

const BreedInfo = ({ breedInfo }) => {
    return (
        <InfoSection>
            <li><span>Life Span:</span> {breedInfo.life_span}</li>
            <li><span>Hypoallergenic:</span> {(breedInfo.hypoallergenic === 1) ? "Yes" : "No"}</li>
            <li><span>Affection Level:</span> {breedInfo.affection_level}/5</li>
            <li><span>Dog Friendly:</span> {breedInfo.dog_friendly}/5</li>
            <li><span>Stranger Friendly:</span> {breedInfo.stranger_friendly}/5</li>
            <li><span>Child Friendly:</span> {breedInfo.child_friendly}/5</li>
            <li><span>Shedding Level:</span> {breedInfo.shedding_level}/5</li>
            <li><span>Intelligence:</span> {breedInfo.intelligence}/5</li>
        </InfoSection>
    )
} 

export default BreedInfo;