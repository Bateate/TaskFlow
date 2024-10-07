import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import classes from "./RootLayout.module.css";
function RootLayout() {
  return (
    <>
      <Header />
      <main className={classes.main__container}>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
