import React from 'react';
import ResultRecord from './ResultRecord.js'

import './ResultHistory.css'

const ResultHistory = (props) => {
    const recordComponents = props.resultHistory.map((record, i) => {
        return (
            <li key={i}>
                <ResultRecord 
                city={record.cityData}
                lat={record.latData}
                lon={record.lonData}
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

export default ResultHistory;