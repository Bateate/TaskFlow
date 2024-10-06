import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import classes from "./RootLayout.module.css";
function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
