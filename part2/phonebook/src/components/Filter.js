const Filter = ({ handleSearch }) => {
  return (
    <div>
      <label>Filter shown with a:</label>
      <input onChange={handleSearch} />
    </div>
  );
};

export default Filter;
