import "./styles.css";

import LeftMenu from "./components/LeftMenu";
import Search from "./components/Search";

function Header(props) {
  console.log("Props inside Header: ", props);
  return (
    <header className="header">
      <LeftMenu />
      <Search setSearchInput={props.setSearchInput} />
    </header>
  );
}

export default Header;
