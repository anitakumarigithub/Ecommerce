import { useContext } from "react";
import Secondpage from "./Secondpage";
import Econtext from "./Econtext";
const CartDetails=()=>{
    const {carts}=useContext(Econtext);
    return<>

<div className='group'>
          <h1><center>MOST LOVED JEWELRY,COLLECTIONS</center></h1>
          </div>
        {carts.reduce((acc, i, index) => {
            console.log("data from context",i.img);
  if (index % 3 === 0) {
    acc.push([]);
  }
  acc[acc.length - 1].push(
    <div className="col-md-4" key={index}>
      <Secondpage img={i.img} isCart={false}  />
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
export default CartDetails;