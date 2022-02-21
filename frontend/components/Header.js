import React, { Fragment,useState,useEffect } from "react";
import { APP_NAME } from "../config";
import Link from "next/link";
import Router from "next/router";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        {/* LOGO */}
        <Link href="/">
        <img src="static/images/blog.png" width="50" height="50" />
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
                    <NavLink >Signup</NavLink>
                  </Link>
                </NavItem>
              </Fragment>
            )}

            {isAuth() && isAuth().role==0 &&(
              <NavItem>
                <Link href="/user">
                    <NavLink >
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role==1 &&( 
              <NavItem>
                <Link href="/admin">
                    <NavLink >
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
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
