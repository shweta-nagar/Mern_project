import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/js/bootstrap'
import "../App.css";
import Nav from "./Nav";

const Services = () => {
  const [show, setShow] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch("http://localhost:5000/api/data/service");
      const res = await data.json();
      setShow(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <Nav/>
      <div className="container  servi-card  shadow-1-strong rounded">
        <h1 className="text-center text-light mt-5">Services</h1>
        <div className="row">
          {show.map((item) => {
            return (
              <div className="col-md-4 ">
                <div className="card mt-4">
                  <img src={`http://localhost:5000/assets/${item.image}`} className="card-img-top ca-img" />
                  <div className="card-body"style={{backgroundColor: "#188fb4"}}>
                    <h5 class="card-title text-center ">{item.service_name}</h5>
                    <p  class="card-text text-center">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
