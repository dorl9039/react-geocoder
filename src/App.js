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
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      return {lat, lon}
    });
};

function App() {
  
  const updateLonLat = (city) => {
    return getLonLat(city)
    .then(response => {
      setLonData(response.lon);
      setLatData(response.lat);
      setCityData(city);
      setErrorState(false);
      addHistoryData({latData: response.lat, lonData: response.lon, cityData: city});
    })
    .catch(err => {
      setErrorState(true);
    });
  };

  const [cityData, setCityData] = useState('');
  const [lonData, setLonData] = useState('');
  const [latData, setLatData] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [resultHistoryData, setResultHistoryData] = useState([]);
  
  const addHistoryData = newResult => {
    setResultHistoryData(results => [...results, newResult])
  }

  return (
    <div className="App">
      <h1>Get Latitude and Longitude</h1>
      <SearchForm updateLonLat={updateLonLat}/>
      <SearchResult 
        cityData={cityData} 
        lonData={lonData} 
        latData={latData}
        onUpdate={addHistoryData}
      />
      <ErrorAlert errorState={errorState} />
      <ResultHistory resultHistory={resultHistoryData}/>
    </div>
  );
}

export default App;
