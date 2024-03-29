import React, { useState } from "react";
import "../App.css";
import Nav from "./Nav";
import "../../node_modules/bootstrap/dist/js/bootstrap";

const Contact = () => {
  const [infodata, setInfodata] = useState({ name: "", email: "", msg: "" });

  const handleInfo = (e) => {
    setInfodata({ ...infodata, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: JSON.stringify(infodata),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      alert("Message Sent Successfully");
      const res = await data.json();
      console.log(res);

      setInfodata({
        name: "",
        email: "",
        msg: "",
      });
    } catch (error) {
      console.log("Error!", error);
    }
  };
  return (
    <div>
      <Nav />

      {/* <div className="container mt-5 con-box">
        <div className="text-center">
          <h3 className="mt-5">Contact Form</h3>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleFormSubmit}>
              <div className="app-form">
                <div class="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    name="name"
                    value={infodata.name}
                    onChange={handleInfo}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    name="email"
                    value={infodata.email}
                    onChange={handleInfo}
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    name="msg"
                    value={infodata.msg}
                    onChange={handleInfo}
                  />
                </div>
                <div className="app-form-group buttons ">
                  <button className="app-form-button">CANCEL</button>
                  <button className="app-form-button">SEND</button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
      </div> */}

<div class="container bg-light w-50 border shadow regis-box">
        <div class="row">
           <h3 className="d-flex justify-content-center border bg-dark text-white shadow mb-2">Contact-us</h3>
           <div className="col-md-6">
           <iframe className="mt-3"
                      src="https://www.google.com/maps/search/?api=1&parameters"
                      width="100%"
                      height="250px"
                      allowfullscreen=""
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
           </div>
           
           <div className="col-md-6 ">
            <form onSubmit={handleFormSubmit}>
              <div className="app-form">
                <div class="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    name="name"
                    value={infodata.name}
                    onChange={handleInfo}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    name="email"
                    value={infodata.email}
                    onChange={handleInfo}
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    name="msg"
                    value={infodata.msg}
                    onChange={handleInfo}
                  />
                </div>
                <div className="app-form-group buttons  d-flex justify-content-center ">
                  <button className="app-form-button">CANCEL</button>
                  <button className="app-form-button">SEND</button>
                </div>
              </div>
            </form>
            </div>
        </div>
    </div>



      {/* <iframe className="mt-3"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1602802684192!2d77.39638073968018!3d28.504825075835775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks%20%7C%20Coding%20Classes!5e0!3m2!1sen!2sin!4v1702963476861!5m2!1sen!2sin"
                      width="100%"
                      height="250px"
                      allowfullscreen=""
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> */}
    </div>
  );
};

export default Contact;
