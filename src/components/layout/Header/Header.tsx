import { Link } from "react-router-dom";
import appsLogo from "../../../assets/apps.svg";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <img src={appsLogo} alt="Apps icon" />
      <Link className={classes.link} to="/">
        Home
      </Link>
      <Link className={classes.link} to="/workspaces">
        Workspaces
      </Link>
      <Link className={classes.link} to='auth/login'>
        User
      </Link>
    </header>
  );
}

export default Header;
