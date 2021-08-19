import "./styles.css";

import SearchBar from "./components/SearchBar";

function Search(props) {
  console.log("Props inside Search: ", props);
  return (
    <div className="search">
      <SearchBar
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
      />
    </div>
  );
}

export default Search;
