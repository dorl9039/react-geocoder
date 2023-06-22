import React from 'react';
import './SearchResult.css'

const SearchResult = (props) => {
    return (
        <div className='results-container'>
            <h2>Results for: {props.cityData}</h2>
            <ul>
                <li>Longitude: {props.lonLatData.lon}</li>
                <li>Latitude: {props.lonLatData.lat}</li>
            </ul>
        </div>
    );
}

export default SearchResult;
