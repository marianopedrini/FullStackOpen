const Button = ({ shownCountries, countryName, setShownCountries }) => {
  const showCountry = () => {
    let visibles = { ...shownCountries };
    visibles[countryName] = !shownCountries[countryName];
    setShownCountries(visibles);
  };

  return (
    <button onClick={showCountry}>
      {shownCountries[countryName] ? 'HIDE ' : 'SHOW '}
      {countryName}
    </button>
  );
};

export default Button;
