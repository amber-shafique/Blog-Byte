import { Fragment, default as React } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Footer from "./Footer";

const Index = () => {
  return (
    <Fragment>
      <Layout>
        <h1 style={{ margin: "20px" }}>Home Page</h1>
        <Link href="/signup">
          <a>Signup</a>
        </Link>

        <h2
          style={{
            padding: "50px",
            // margin: "50px",
            textAlign: "center",
            backgroundColor: "hsla(236, 81%, 45%, 0.6)",
            color: "white",
  
          }}
        >
          PROGRAMMING & WEB DEVELOPMENT BLOGS
        </h2>
        <br />
        <div
          style={{
            padding: "50px",
            margin: "50px",
            textAlign: "center",
            backgroundColor: "hsla(229, 67%, 66%, 0.5)",
          }}
        >
          <img src="static/images/lady.gif" width="400" />
          <img src="static/images/info3.svg" width="1200" height="497" />
        </div>

        {/* <img src="static/images/info2.svg" width="1200" height="497" /> */}
        {/* <img src="static/images/info3.svg" style={{maxWidth:"100%",height:"auto"}} /> */}
      </Layout>
      <Footer />
    </Fragment>
  );
};

export default Index;
