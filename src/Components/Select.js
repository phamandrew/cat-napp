import React from 'react';
import styled from 'styled-components';

const Select = styled.select`

    height: 35px;
    background: #0099cc;
    color: #ffd8d1;
    padding-left: 5px;
    font-size: 20px;
    font-weight: 900;
    border: none;
    margin: 0 auto 32px auto;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`
export const SelectBreed = ({ breeds, handleChange, selectedBreed  }) => {
    return(
        <Select name="breeds" defaultValue={"default"} id="breeds" onChange={handleChange}>
            { 
                // On initial page load, when no breed is selected, "Choose a Breed" is set as Default Option
                selectedBreed ? null : <option value="default">Choose A Breed</option> 
            }
            { breeds.map(breed => <option value={breed.id} key={breed.id}>{breed.name}</option>) }
        </Select>
    )
}

export default SelectBreed;