import DiamondRing from "../components/images/DiamondRing.jpeg";
import NosePin from "../components/images/Nosepin.jpeg";
import Bracelet from "../components/images/Bracelet.jpeg";
import Slide1 from "../components/images/Slide1.jpeg";
import Slide2 from "../components/images/Slide2.jpeg";
import Slide3 from "../components/images/Slide3.jpeg";


import "./Sell.css";


const Sell=()=>{
  


    return<>
      
      
    <div className="sell">
      <h6>Sale of the Day</h6>
    </div>
        <div className="trend-container">    
      <div className="row">
        <div className="col">
        <img src={DiamondRing} className="card-img-top" alt="..."/>
        <p>Dimaond Ring</p>
        <div className="price">Buy Now | <i className="bi bi-currency-rupee">75000</i><br/>
        </div>
        <button className="cart">
          <span>Add to Cart</span>
        </button>
    
    
        </div>
        <div className="col">
        <img src={NosePin} className="card-img-top" alt="..."/>
        <p>Nose pin</p>
        <div className="price">Buy Now |<i className="bi bi-currency-rupee">45000</i><br/>
        </div>
        </div>


        <div className="col">
        <img src={Bracelet} className="card-img-top" alt="..."/>
        <p>Bracelet</p>
        <div className="price">Buy Now |
        <i className="bi bi-currency-rupee">50000</i>
        </div>
    
        
    </div>
        </div>
      </div>
      <div className="sale">
      <h6>Sale Of the Day</h6>
    </div>


      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner2">
    <div className="carousel-item active">
      <img src={Slide1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide3}className="d-block w-100" alt="..."/>
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

    </>
    
  }
export default Sell;