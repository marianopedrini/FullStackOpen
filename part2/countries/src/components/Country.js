import { useEffect, useState } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});
  const api_key = process.env.REACT_APP_API_KEY;
  const apiUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`;

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      console.log(res.data.current);
      let weatherUpdate = {
        ...weather,
        temp: res.data.current.temperature,
        icon: res.data.current.weather_icons[0],
      };
      // watherUpdate[temp] = res.data.current.temperature;
      // watherUpdate[icon] = res.data.current.weather.icons[0];
      console.log(weatherUpdate);
      setWeather(weatherUpdate);
    });
  }, []);

  return (
    <div>
      <h2>{country.name.official}</h2>
      <img src={country.flags.png} alt={country.name.official} />
      <h4>Capital: {country.capital}</h4>
      <h4>Continent: {country.continents}</h4>
      <h4>Population: {country.population}</h4>

      <div>
        <h4>Languages</h4>
        <ul>
          {Object.keys(country.languages).map((each) => {
            return (
              <li key={country.languages[each]}>{country.languages[each]}</li>
            );
          })}
        </ul>
      </div>
      <div>
        <h4>Weather in {country.capital}</h4>
        <h4>T° {weather.temp}</h4>
        <img src={weather.icon} />
      </div>
    </div>
  );
};

export default Country;
