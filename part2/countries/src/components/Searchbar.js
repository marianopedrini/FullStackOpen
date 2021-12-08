const Searchbar = ({ handleSearch }) => {
  return (
    <div>
      <label>Find country</label>
      <br />
      <input type="text" onChange={handleSearch} />
    </div>
  );
};

export default Searchbar;
