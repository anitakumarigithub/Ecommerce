import React, { useContext } from "react";
import Econtext from "./Econtext";


const Secondpage = (props) => {
  const {addCart}=useContext(Econtext);
  console.log(props);

    return(
    <>  
        <div className="image-container" style={{ textAlign: "center", }}>
        

      <div key={props.img.id}>
        <img src={props.img.img} alt={props.img.title} 
                  style={{ width: "400px", height: "400px", objectFit: "cover", borderRadius: "8px"}}
                  />

        <h3>{props.img.title}</h3>
        <p>{props.img.Dollar}</p>
      
        {/* <p>{props.img.Reviews}</p> */}
      </div>

    {
      props.isCart&&(
        <button  className="btn" onClick={()=>{addCart(props)}}style={{textAlign:"center",height:"250",width:"180px"}}> ADD TO CART</button>

      )
    }

  </div>
  <div className="price">
  <span className="buy-now">Buy Now</span> | 
  <i className="bi bi-currency-rupee"></i><span className="amount">75000</span>
</div>
  </>
);
}
 export default Secondpage;

