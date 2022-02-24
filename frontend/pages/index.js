import { Fragment, default as React } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Footer from "./Footer";


const Index = () => {
  return (
    <Fragment>
      <Layout>
        <h2>Index Page</h2>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
        <br/>

        <img src="static/images/info2.svg" width="1200" height="497" />
        <img src="static/images/info3.svg" width="1200" height="497" />
        {/* <img src="static/images/info3.svg" style={{maxWidth:"100%",height:"auto"}} /> */}
        
        
      
      </Layout>
     
    </Fragment>
  );
};

export default Index;
