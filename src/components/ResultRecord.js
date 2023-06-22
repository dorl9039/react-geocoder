import React from 'react';
import PropTypes from 'prop-types';
import './ResultRecord.css';

const ResultRecord = (props) => {
    return (
        <div className='record'>
            <h3>{props.city}</h3>
            <p>Longitude: {props.lonLat.lon} </p>
            <p>Latitude: {props.lonLat.lat}</p>
        </div>
    );
}

ResultRecord.propTypes = {
    city: PropTypes.string.isRequired,
    lonLat: PropTypes.object.isRequired
}

export default ResultRecord;