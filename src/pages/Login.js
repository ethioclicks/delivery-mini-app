import React from "react";
import classes from './loginStyle.module.css'
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

const Login = (props) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate();
  
  

  const emailChangeHandler = (event) =>{
    event.preventDefault();
    setemail(event.target.value)
    
  }
  const passwordChangeHandler = (event) =>{
    event.preventDefault();
    setpassword(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    //fetch data from firebase
    let user={email:email, password:password}
    //check if user existis in firebase
    //if exisit and he is user got to user dashboard
    navigate('../user-dashboard')
    //if he is agent
    // navigate('agent-dashboard')
  }
  return (
    <>
      <section className={`${'page-section '} ${classes['login-container']}`} id="login">
        <div className="container">
          <h2 className="text-center mt-0">Login Page</h2>
          <div className="row gx-4 gx-lg-5">
            <div className="col-sm-6 text-left">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={emailChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={passwordChangeHandler}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
