

import Anitakri from "./images/Anitakri.png"
import LogoutButton from "./LogoutButton";


import "./Name.css";
const Name=()=>{
    return<>
   <div className="my-name">
    
     <h1>

        Hey Visitors !! 
         <br />
         Welcome to Anita's Jewellery Collections...
       </h1>

     <div className="my-na">
       <h2>ABOUT US</h2>
       <p>
         Jewelry collections can be fashion-forward, investment-worthy,
         <br />
         or sentimental, catering to different preferences and occasions. Are you
         <br />
         looking for inspiration to create your own collection or exploring trends.
       </p>
       <img src={Anitakri} alt=""/>
    
     </div>
   </div>
   </>
 
};
export default Name;