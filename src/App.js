import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import SearchForm from './components/SearchForm.js';
import SearchResult from './components/SearchResult.js';
import ResultHistory from './components/ResultHistory.js';
import ErrorAlert from './components/ErrorAlert.js';

function App() {
  const handleLonLat = city => {
    axios.get('https://weather-report-proxy-server-vaa7.onrender.com/location', {
      params: {q: city}
    })
    .then(response => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      setLonData(lon);
      setLatData(lat);
      setCityData(city);
      setErrorState(false);
      const newResult = {latData: lat, lonData: lon, cityData: city};
      addHistoryData(newResult);
    })
    .catch(err => {
      setErrorState(true);
      })
  }
  const [cityData, setCityData] = useState('');
  const [lonData, setLonData] = useState(0);
  const [latData, setLatData] = useState(0);
  const [errorState, setErrorState] = useState(false);
  const [resultHistoryData, setResultHistoryData] = useState([]);
  
  const addHistoryData = newResult => {
    setResultHistoryData(results => [...results, newResult])
  }

  return (
    <div className="App">
      <h1>Get Latitude and Longitude</h1>
      <SearchForm handleLonLat={handleLonLat}/>
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
