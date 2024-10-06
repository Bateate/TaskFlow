import { Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.css";

function AuthLayout() {
  return (
    <div className={classes.authBackground}>
      <Outlet />
    </div>
  );
}
export default AuthLayout;
