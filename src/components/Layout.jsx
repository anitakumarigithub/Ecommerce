import React from "react";

import { Outlet,useLocation } from "react-router";
import Name from "./Name.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";


 




function Layout(){
    const location = useLocation();
    const isName = location.pathname==="/";
    return(
        
           <div>
      
<Navbar/>
<Footer/>

        {isName && (
            <div>
    

    <Name/>

        
            </div>)}
    
        <Outlet />
        </div>
        
        
        
    )
}
export default Layout;