import { Props } from "../../../utils/interfaces/props.interface";
import classes from "./Sidebar.module.css";

function Sidebar({ children }: Props) {
  return <div className={classes.sidebar}>{children}</div>;
}

export default Sidebar;
