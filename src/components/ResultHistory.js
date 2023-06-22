import React from 'react';
import PropTypes from 'prop-types';
import ResultRecord from './ResultRecord.js'
import './ResultHistory.css'

const ResultHistory = (props) => {
    const recordComponents = props.resultHistory.map((record, i) => {
        return (
            <li key={i}>
                <ResultRecord 
                city={record.cityData}
                lonLat={record.lonLatData}
                />
            </li>
        );
    });
    return(
        <div className='result-history-container'>
            <h2>Search History</h2>
            <ul>
              {recordComponents}  
            </ul>
        </div>
    );
}

ResultHistory.propTypes = {
    resultHistory: PropTypes.array.isRequired
}

export default ResultHistory;