import Country from './Country';
import Button from './Button';

const Results = ({
  filteredCountries,
  results,
  shownCountries,
  setShownCountries,
}) => {
  return (
    <div>
      {results > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : results <= 10 && results > 1 ? (
        filteredCountries.map((each) => {
          return (
            <div
              style={{ borderBottom: '1px solid black' }}
              key={each.name.common}
            >
              {!shownCountries[each.name.common] ? (
                <h3>{each.name.common}</h3>
              ) : (
                <Country
                  country={each}
                  key={each.name.common}
                  shownCountries={shownCountries}
                />
              )}

              <Button
                shownCountries={shownCountries}
                countryName={each.name.common}
                setShownCountries={setShownCountries}
              />
            </div>
          );
        })
      ) : results === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        'Country not found'
      )}
    </div>
  );
};

export default Results;
