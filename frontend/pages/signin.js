import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
import Footer from "./Footer";
import Link from "next/link";

const Signin = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Login to your account</h2>
      <p className="text-center">
        <Link href="/signup">
          <a>Don't have an account? Sign Up!</a>
        </Link>
      </p>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
