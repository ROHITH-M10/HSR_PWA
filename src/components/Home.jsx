import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sample_Image_1 from "../../public/images/sample_image_amrita_1.jpg";
import Sample_Image_2 from "../../public/images/sample_image_amrita_2.jpg";

function Home({
  handleLogin,
  handleHomeClick
}) {

  return (
  
    <div className="home-page">

      {/* Navbar */}
      <Navbar 
       onHomeClick={handleHomeClick}
      />
      
      

      {/* Main Image */}
      <div className="main-image">
        <img
          src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
          alt="Amrita Hospital Logo"
        />
      </div>

      <div className="home-title">AIMS HSR App</div>
      <p className="home-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi et dicta porro animi nostrum ab exercitationem natus doloremque error assumenda! Tenetur distinctio unde voluptatibus suscipit aperiam ut fugiat sunt impedit.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum expedita, dolorem nisi sint dolore ipsa consequuntur consequatur, alias possimus veniam corporis doloremque atque molestias incidunt error sequi numquam recusandae vel?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam debitis laboriosam corrupti fugiat repellat esse quo quasi numquam. Ad nesciunt nam aliquid, tempora consequatur incidunt eius maxime distinctio quia?
      </p>

      {/* Carousel */}
      <Carousel autoplay autoplaySpeed={5000} className="carousel">
        <div>
          <img src={Sample_Image_1} alt="Sample 1" className="carousel-image" />
        </div>
        <div>
          <img src={Sample_Image_2} alt="Sample 2" className="carousel-image" />
        </div>
      </Carousel>

      {/* Buttons */}
      {/* <div className="home-button-container">
        <button className="login-button" onClick={handleLogin}>Login</button>
        <button className="guest-button" onClick={handleGuestSelection}>Continue as Guest</button>
      </div> */}


      {/* Login Button */}
      <div className="home-button-container">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;