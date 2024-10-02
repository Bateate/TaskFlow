import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./RootLayout.css";
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
