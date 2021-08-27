import React, { Component } from 'react';
import Axios from 'axios';
import SelectBreed from './Components/Select';
import CatGallery from './Components/CatGallery';
import Header from './Components/Header';
import Section from './Components/Section';
import BreedInfo from './Components/BreedInfo';

const api_key = process.env.REACT_APP_CAT_API_KEY;

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            breeds: [],
            selectedBreed: null,
            breedInfo: null

        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // Initial request for general image gallery at initial page load
        Axios({
            url: `https://api.thecatapi.com/v1/images/search`,
            method: 'GET',
            params: {
                api_key: {api_key},
                limit: 50
            }
        })
        .then((res) => {
            const cats = res.data;
            this.setState({ 
                cats
            });
        })
        // Initial request to populate Select with Breed Options
        Axios({
            url: `https://api.thecatapi.com/v1/breeds`,
            method: 'GET',
            params: {
                api_key: {api_key}
            }
        })
        .then((res) => {
            const breeds = res.data;
            this.setState({ 
                breeds
            });
        })
    }
    componentDidUpdate(prevProps, prevState) {
        // If Breed is Selected, request for Breed specific images is made
        if (this.state.selectedBreed !== prevState.selectedBreed) {
            Axios({
                url: `https://api.thecatapi.com/v1/images/search?breed_ids=${this.state.selectedBreed}`,
                method: 'GET',
                params: {
                    api_key: {api_key},
                    limit: 100
                }
            })
            .then((res) => {
                const cats = res.data;
                this.setState({ 
                    cats
                });
                return cats;
            })
            // When Breed specific request is made, additional State is set to populate additional Breed Data
            .then((cats) => {
                const breedInfo = cats[0].breeds[0];
                this.setState({
                    breedInfo
                })
            })
        }
    }
    
    handleChange(e) {
        this.setState({selectedBreed: e.target.value})
    }
    
    render() {
        return(
            <Section>
                    <Header>Cat Napp</Header>
                 
                    <SelectBreed breeds={this.state.breeds} selectedBreed={this.state.selectedBreed} handleChange={this.handleChange} />
                    {this.state.breedInfo ? <BreedInfo breedInfo={this.state.breedInfo} /> : null}

                    <CatGallery cats={this.state.cats} />
            </Section>
        )
    }
}

export default App;