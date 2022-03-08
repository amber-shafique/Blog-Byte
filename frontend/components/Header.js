import React, { Fragment, useState, useEffect } from "react";
import { APP_NAME } from "../config";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        // style={{
        //   backgroundColor: "hsla(236, 81%, 45%, 0.6)",
        //   color: "white",
        // }}
      >
        {/* LOGO */}
        <Link href="/">
          <img src="/static/images/favicon.png" width="50" height="50" />
        </Link>

        <Link href="/">
          <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link href="/signup">
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </Fragment>
            )}

            {isAuth() && isAuth().role == 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role == 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
