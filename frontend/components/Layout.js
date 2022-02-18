import Header from "./Header";
import { Fragment, default as React } from "react";
import SignupComponent from "./auth/SignupComponent";


const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      {children}
    
    </Fragment>
  );
};

export default Layout;
