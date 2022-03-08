import { Fragment, default as React } from "react";
import { useState ,useEffect} from "react";
import { signup,isAuth } from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "Amber",
    email: "amber.mydocs@gmail.com",
    password: "123456",
    // name: "",
    // email: "",
    // password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const { name, email, password, error, loading, message, showForm } = values;

  useEffect(()=>{
    isAuth () && Router.push('/');
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table( { name, email, password, error, loading, message, showForm } );
    setValues({...values,loading:true,error:false});
    const user={name,email,password};
    

    signup(user).then(data=>{

        if(data.error){
            setValues({...values,error:data.error,loading:false})
        }else{
            setValues({
                ...values,
                name: '',
                email: '',
                password: '',
                error: '',
                loading: false,
                message: data.message,
                showForm: false
              });
        }
    });

};
  const handleChange = name=>(e) => {
    setValues({...values,error:false,[name]:e.target.value})
  };

  const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
  const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
  const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={handleChange('name')}
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange('email')} 
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>

        <div className="form-group">
          <input
            value={password}
            onChange={handleChange('password')}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
      
        <div>
          <button className="btn btn-primary">Signup</button>
        </div>
        <div>
        <Link href="/signin">
          <a>Already have an account? Signin!</a>
        </Link>
        </div>
       
      </form>
    );
  };

  return <Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
  </Fragment>;
};

export default SignupComponent;
