import './App.css';

import SearchForm from './components/SearchForm.js';
import SearchResult from './components/SearchResult.js';
import ResultHistory from './components/ResultHistory.js';

function App() {
  return (
    <div className="App">
      <h1>Get Latitude and Longitude</h1>
      <SearchForm />
      <SearchResult />
      <ResultHistory />
    </div>
  );
}

export default App;
