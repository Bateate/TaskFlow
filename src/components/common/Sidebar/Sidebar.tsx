import { PropsWithChildren } from "react";
import classes from "./Sidebar.module.css";

function Sidebar(props: PropsWithChildren) {
  return <div className={classes.sidebar}>{props.children}</div>;
}

export default Sidebar;
