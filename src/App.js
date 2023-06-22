import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import SearchForm from './components/SearchForm.js';
import SearchResult from './components/SearchResult.js';
import ResultHistory from './components/ResultHistory.js';
import ErrorAlert from './components/ErrorAlert.js';

const getLonLat = city => {
    return axios
    .get('https://weather-report-proxy-server-vaa7.onrender.com/location', {
        params: {q: city}
    })
    .then(response => {
        const lon = response.data[0].lon;
        const lat = response.data[0].lat;
        return {lon, lat}
    });
};

function App() {
    const updateLonLat = (city) => {
        return getLonLat(city)
        .then(response => {
            setLonLatData(response)
            setCityData(city);
            setErrorState(false);
            addHistoryData({lonLatData: response, cityData: city});
        })
        .catch(err => {
            setErrorState(true);
        });
    };

    const [cityData, setCityData] = useState('');
    const [lonLatData, setLonLatData] = useState({});
    const [errorState, setErrorState] = useState(false);
    const [resultHistoryData, setResultHistoryData] = useState([]);
    
    const addHistoryData = newResult => {
        setResultHistoryData(results => [...results, newResult]);
    }

    return (
        <div className="App">
        <h1>Get Latitude and Longitude</h1>
        <SearchForm updateLonLat={updateLonLat}/>
        <SearchResult 
            cityData={cityData} 
            lonLatData={lonLatData} 
        />
        <ErrorAlert errorState={errorState} />
        <ResultHistory resultHistory={resultHistoryData}/>
        </div>
    );
}

export default App;
