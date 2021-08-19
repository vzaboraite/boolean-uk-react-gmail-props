import "./styles.css";

function SearchBar(props) {
  console.log("Props inside SearchBar: ", props);
  return (
    <input
      className="search-bar"
      placeholder="Search mail"
      onChange={(event) => props.setSearchInput(event.target.value)}
    />
  );
}

export default SearchBar;
