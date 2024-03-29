import React, { useState, useContext } from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../App.css";
import loginf from "../../src/images/login.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth";
import Nav from "./Nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { storeToken } = useContext(AuthContext);

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      });

      const res = await data.json();
      console.log(res);
      storeToken(res.token);
      
    }
    
   
    catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Nav />

      {/* <div className="container log-box border shadow ">
        <div className='row'>
    <div className="col-6">
        <img className='img-fluid h-1' src={loginf} alt=""/>
    </div>
    <div class="col-6 text-center mt-4 name">
       <h3> Log-In</h3>
    
    <form class="p-3 mt-3" onSubmit={handlelogin}>
        <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder="Email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className='app-form-control'
            />

        </div>
        <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input type="password" name="password" id="pwd" placeholder="Password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             className='app-form-control mt-3 mb-3'
            />
        </div>
        
        <button
                type="submit"
                className="btn btn-outline-light shadow w-50 mt-4 mb-5"
              >
                Login
              </button>
    </form>
    <div class="text-center fs-6">
        <a href="#" className='text-white'>Don't have an account</a> or <Link className='text-white' to="/register">Sign-up</Link>
    </div>
    </div>
    </div>
</div> */}

      <div class="container bg-light w-50 border shadow regis-box">
        <div class="row">
          <h3 className="d-flex justify-content-center border bg-dark text-white shadow">
            Log-in
          </h3>
          <div class="col-md-6">
            <img
              src={loginf}
              alt="Registration Image"
              class="img-fluid rounded ms-3 mt-3 h-75"
            />
          </div>

          <div class="col-md-6 ">
            <form class="p-3 mt-3" onSubmit={handlelogin}>
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="app-form-control"
                />
              </div>
              <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="app-form-control mt-3 mb-3"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary shadow w-100 mt-2"
              >
                Login
              </button>
            </form>
            <div class="text-center fs-6">
              <a href="#" className="text-dark">
                Don't have an account
              </a>{" "}
              or{" "}
              <Link className="text-dark" to="/register">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
