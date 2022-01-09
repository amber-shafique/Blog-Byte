import Header from "./Header";
import { Fragment, default as React } from "react";


const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <p>footer</p>
    </Fragment>
  );
};

export default Layout;
