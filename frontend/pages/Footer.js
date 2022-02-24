import React, { Fragment } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <footer>
      <br/>
        <p style={{textAlign:'center', fontWeight:'bold'}}>Copyright © {year}</p>
      </footer>
    </Fragment>
  );
};
export default Footer;
