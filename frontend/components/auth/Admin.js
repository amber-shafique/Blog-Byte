import { Fragment, default as React } from "react";
import { useEffect } from "react";
import { isAuth } from "../../actions/auth";
import Router from "next/router";

const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {

      Router.push(`/signin`);
    }
    else if(isAuth().role!==1){

        Router.push(`/`);
    }

  }, []);
  return <Fragment>{children}</Fragment>;
};

export default Admin;
