import React from 'react';
import { Input, Button } from '../components';
import {API} from "../utils";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleBreed = this.handleBreed.bind(this);
        this.searchResults = props.searchResults;
    }

    handleFormSubmit(event) {
        event.preventDefault();
        API.getDogsOfBreed(this.state.breed).then(results => {
            console.log(results.data.message[0]);
            this.searchResults(results.data.message);
        });
    }

    handleBreed(event) {
        let value = event.target.value;
        this.setState(prevState => ({...prevState, breed: value }));
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <Input id="breed" title="Breed Name: " handleChange={this.handleBreed} />
                <Button title="Search" style="primary" />
            </form>
        );
    }
}

export default SearchForm;