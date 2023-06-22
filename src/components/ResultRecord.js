import React from 'react';

const ResultRecord = (props) => {
    return (
        <div className='record'>
            <h3>{props.city}</h3>
            <p>Longitude: {props.lon} </p>
            <p>Latitude: {props.lat}</p>
        </div>
    );
}

export default ResultRecord;