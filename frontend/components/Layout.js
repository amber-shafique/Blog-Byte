import Header from "./Header";
import { Fragment, default as React } from "react";
import Footer from "../pages/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      {children}
      <Footer/>
    </Fragment>
  );
};

export default Layout;
