import { Fragment, default as React } from "react";
import { useEffect } from "react";
import { isAuth } from "../../actions/auth";
import Router from "next/router";

const Private = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/signin`);
    }
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default Private;
