import React from "react";
import Nav from "./Nav";
import "../App.css";
import abimg from "../images/values-1.png";

const About = () => {
  return (
    <>
      <Nav />
      <section id="about" class="about mt-5">
        <div class="container mt-5" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="content">
                <h3>what about us</h3>
                <h2>
                  So, how do you write these magical words that will intrigue
                  people enough to stay on your website a little longer
                </h2>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
                </p>
              
              </div>
            </div>

            <div
              class="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={abimg} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
