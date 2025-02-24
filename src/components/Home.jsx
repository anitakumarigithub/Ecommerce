import React from "react";

import Onepic from '../components/images/Onepic.jpeg';
import Twopic from '../components/images/Twopic.jpeg';
import Threepic from '../components/images/Threepic.jpeg';
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import BestProuct from "./BestProduct";
import "./Home.css";
import Sell from "./Sell";
import Footer from "./Footer";


function Home(){
    return<>
    
          <div className="content">
           <img src={Onepic}  alt="" />
          <img src={Twopic}  alt="" />
          <img src={Threepic} alt="" />
           </div>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner1">
    <div className="carousel-item active">
      <img src={img1} className="block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 

<BestProuct/>
          <Sell/>
           
    <div className="boxlimited">
    <h4><center>LIMITED-TIME ONLY</center></h4>
<div className="boxh">
    <h2><b>SHARE & GET 30% OFF!</b></h2>
    <h5>Love collecting beautiful new rings? Share the excitement with 
        your friends by giving them 30% off their first order and you'll
         get 30% in return!</h5>
         <div className="boxemail">
            <form>
        <input type="text" placeholder="Your email address"/>
        </form></div>
        <div className="btnnext">
    <button>NEXT</button>
    </div>
    </div>
    </div>
    <Footer/>

    </>
}
export default Home;