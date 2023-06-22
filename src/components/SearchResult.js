import React from 'react';
import './SearchResult.css'

const SearchResult = (props) => {
    return (
        <div className='results-container'>
            <h2>Results for: {props.cityData}</h2>
            <ul>
                <li>Latitude: {props.latData}</li>
                <li>Longitude: {props.lonData}</li>
            </ul>
        </div>
    );
}

export default SearchResult;
