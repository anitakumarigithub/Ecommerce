import React from "react";
import Secondpage from "./Secondpage";
import SecondItem from "./BestProductItem"

import "./BestProduct.css";
const bestProduct=()=>{
    
      
return<>
         
          <div className='group'>
          <h1><center>MOST LOVED JEWELRY,COLLECTIONS</center></h1>
          </div>
        {SecondItem.reduce((acc, i, index) => {
  if (index % 3 === 0) {
    acc.push([]);
  }
  acc[acc.length - 1].push(
    <div className="col-md-4" key={index}>
      <Secondpage img={i} isCart={true}  />
    </div>
  );
  return acc;
}, []).map((row, rowIndex) => (
  <div className="row" key={`row-${rowIndex}`}>
    {row}
  </div>
))}

</>
}
 export default bestProduct;

