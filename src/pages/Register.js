import React from "react";
import classes from "./registrationStyle.module.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Register = (props) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()

  const emailChangeHandler = (event) =>{
    event.preventDefault();
    setemail(event.target.value)
    
  }
  const passwordChangeHandler = (event) =>{
    event.preventDefault();
    setpassword(event.target.value)
  }

  const registerHandler = (event) => {
    let user={email:email, password:password}
    //save user to firebase
    navigate('../login')
  }
  return (
    <>
      <section
        className={`${"page-section "} ${classes["registration-container"]}`}
        id="registration"
      >
        <div className="container">
          <h2 className="text-center mt-0">Registration page</h2>
          <div className="row gx-4 gx-lg-5">
            <div className="col-sm-6 text-left">
              <form>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="staticEmail"
                      onChange={emailChangeHandler}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      onChange={passwordChangeHandler}
                    />
                  </div>
                  <div class="col-sm-2">

                  </div>
                  <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary" onClick={registerHandler} >Register</button>
                  </div>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
