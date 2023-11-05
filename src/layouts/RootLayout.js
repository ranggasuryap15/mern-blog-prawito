import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import "./rootLayout.scss";

export default function RootLayout() {
  return (
    <div className="main-app-wrapper">
      <Header />

      <div className="content-wrapper">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
