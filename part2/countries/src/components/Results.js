import Country from './Country';

const Results = ({ filteredCountries, results }) => {
  return (
    <div>
      {results > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : results <= 10 && results > 1 ? (
        filteredCountries.map((each) => {
          return <p key={each.altSpellings[0]}>{each.name.official}</p>;
        })
      ) : results === 1 ? (
        <Country data={filteredCountries} />
      ) : (
        'Country not found'
      )}
    </div>
  );
};

export default Results;
