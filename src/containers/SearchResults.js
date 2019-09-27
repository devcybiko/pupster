import React from 'react';
import { Image } from '../components';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: ['https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg',
            'https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg']
        }
        props.me(this);
    }

    render() {
        return (
            <ul className="list-group search-results">
                {this.state.urls.map(url => (
                    <li key={url} className="list-group-item">
                        <Image url={url}/>
                    </li>
                ))}
            </ul>
        );
    }
}

export default SearchResults;