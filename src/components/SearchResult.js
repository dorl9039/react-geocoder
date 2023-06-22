import React from 'react';
import PropTypes from 'prop-types';
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
SearchResult.propTypes = {
    cityData: PropTypes.string.isRequired,
    lonLatData: PropTypes.object.isRequired,
};
export default SearchResult;
