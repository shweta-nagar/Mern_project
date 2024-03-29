import React from 'react'
import Nav from './Nav'
import home from '../images/homepage.png'
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../App.css";


const Home = () => {
  return (
    <div>
      <Nav/>
      <section id="hero" class="hero d-flex align-items-center">

<div class="container mt-5">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center">
      <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
      <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
      <div data-aos="fade-up" data-aos-delay="600">
       
      </div>
    </div>
    <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={home} class="img-fluid" alt=""/>
    </div>
  </div>
</div>

</section>


    </div>
  )
}

export default Home