import Econtext from "./Econtext";
import Edata from "./Edata";
import { useState } from "react";

const EcontextProvider=(props)=>{
const [carts,setCarts]=useState([]);
const addCart=(cart)=>{
    setCarts((prevCarts) => [...prevCarts, cart]);


}


return<Econtext.Provider value={{addCart,carts}}>
    {
        props.children
    }


    </Econtext.Provider>

}
export default EcontextProvider;