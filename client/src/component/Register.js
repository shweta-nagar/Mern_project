import React, { useContext, useState } from "react";
import '../../node_modules/bootstrap/dist/js/bootstrap'
import login from "../../src/images/user.png";
import { AuthContext } from "../store/auth";
import "../App.css";
import Nav from "./Nav";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmpassword: "",
  });
  const {storeToken}=useContext(AuthContext)
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    //alert(student)
    try {
      const data = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      });
      //console.log(data)
      const res = await data.json();
      console.log(res);
      storeToken(res.token);

      if (res.msg === "Email already exists.") {
        toast.warning("This Email is already registered!");
      } 
      else if (res.msg === "All fields are required") {
        toast.error("All fields are required!");
      } 
      else if (res.msg === "Password does not match") {
        toast.warning("Password and confirm password must be identical!");
      } 
      else {
        toast.success("Registered successfully")
        navigate('/login')
      }
      setStudent({
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <>
    <Nav/>
    <div class="container bg-light w-50 border shadow regis-box">
        <div class="row">
           <h3 className="d-flex justify-content-center border bg-dark text-white shadow">Sign-up</h3>
            <div class="col-md-6">
                <img src={login} alt="Registration Image" class="img-fluid rounded ms-3 mt-3 h-75"/>
            </div>
           
            <div class="col-md-6 ">
                
                <form onSubmit={sendData} method="post"> 
                <input
                value={student.name}
                name="name"
                onChange={handleInput}
                type="text"
                className="app-form-control regis-nam mb-2"
                placeholder="Enter your name"
              />
              <input
                value={student.email}
                onChange={handleInput}
                name="email"
                type="email"
                className="app-form-control regis-nam mb-2"
                placeholder="Enter your e-mail"
              />
              <input
                value={student.contact}
                onChange={handleInput}
                name="contact"
                type="text"
                className="app-form-control regis-nam mb-2"
                placeholder="Contact Number"
              />
              <input
                value={student.password}
                onChange={handleInput}
                name="password"
                type="password"
                placeholder="Password"
                className="app-form-control regis-nam mb-2"
              />
              <input
                value={student.confirmpassword}
                onChange={handleInput}
                name="confirmpassword"
                type="password"
                placeholder="Confirm-Password"
                className="app-form-control regis-nam mb-2"
              />
                  <div className="d-flex justify-content-center">    <button
                type="submit"
                className="btn btn-outline-primary shadow w-100 mt-2"
              >
                Register
              </button></div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
};

export default Register;
