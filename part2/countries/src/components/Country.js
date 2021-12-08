const Country = ({ data }) => {
  let country = data[0];

  return (
    <div>
      <h2>{country.name.official}</h2>
      <img src={country.flags.png} alt={country.name.official} />
      <h4>Capital: {country.capital}</h4>
      <h4>Continent: {country.continents}</h4>
      <h4>Population: {country.population}</h4>

      {/* {country.languages} */}
      <div>
        <ul>
          {Object.keys(country.languages).map((each) => {
            return (
              <li key={country.languages[each]}>{country.languages[each]}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Country;
