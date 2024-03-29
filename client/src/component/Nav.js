import React, { useContext } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logos.png";

import "../../node_modules/bootstrap/dist/js/bootstrap";
import { AuthContext } from "../store/auth";

const Nav = () => {
  const {isLoggedIn,LogoutUser} = useContext(AuthContext)
  return (
    <>
      <nav class="navbar navbar-expand-lg text-light navbar-scroll fixed-top  nav-bar border-bottom shadow">
        <div class="container-fluid">
          <div className="navbar-brand">
            <h2 className="logo-head text-light">
              <img className="logo-img" src={logo} />
              RegValet
            </h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <div className="offcanvas-body">
              <ul
                class="navbar-nav  justify-content-end
             "
              >
                <li className="nav-item ">
                  <NavLink className="nav-link mx-lg-2" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link  mx-lg-2" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link  mx-lg-2" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link  mx-lg-2" to="/contact">
                    Contact
                  </NavLink>
                </li>

                {
                  isLoggedIn ?  <li  onClick={LogoutUser} className="nav-link ">
                  {/* <NavLink className="nav-link   mx-lg-2" to="/logout"> */}
                    Log-out
                  {/* </NavLink> */}
                </li>
                : <>
                  <div className="login">
                  <li className="nav-item ">
                    <NavLink className="nav-link   mx-lg-2" to="/login">
                      Login
                    </NavLink>
                  </li>
                
                </div>

                <li className="nav-item ">
                  <NavLink className="nav-link  mx-lg-2" to="/register">
                    Register
                  </NavLink>
                </li>
               
                </>
                }
                
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
