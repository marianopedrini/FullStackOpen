import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [results, setResults] = useState(250);
  const [shownCountries, setShownCountries] = useState({});

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
      setFilteredCountries(res.data);
    });
  }, []);

  useEffect(() => {
    let countriesToShow = {};
    filteredCountries.forEach((each) => {
      countriesToShow[each.name.official] = false;
    });
    setShownCountries(countriesToShow);
  }, [filteredCountries]);

  const handleSearch = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    let countriesList = countries.filter((country) => {
      return country.name.official.toLowerCase().includes(searchTerm);
    });
    setFilteredCountries(countriesList);
    setResults(countriesList.length);
  };

  return (
    <div>
      <Searchbar handleSearch={handleSearch} />
      <Results
        filteredCountries={filteredCountries}
        results={results}
        shownCountries={shownCountries}
        setShownCountries={setShownCountries}
      />
    </div>
  );
}

export default App;
