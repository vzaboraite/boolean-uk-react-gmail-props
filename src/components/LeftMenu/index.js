import InboxList from "./components/InboxList";
import "./styles.css";

function LeftMenu(props) {
  console.log("Props inside LeftMenu: ", props);
  return (
    <nav className="left-menu">
      <InboxList
        currentTab={props.currentTab}
        unreadEmails={props.unreadEmails}
        starredEmails={props.starredEmails}
        hideRead={props.hideRead}
        setCurrentTab={props.setCurrentTab}
        setHideRead={props.setHideRead}
      />
    </nav>
  );
}

export default LeftMenu;
