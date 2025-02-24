  import "./Navbar.css";
  import { NavLink } from "react-router";
  import Econtext from "./Econtext";
  import { useContext } from "react";
  import Anita from "./images/Anita.jpeg";
  import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";


  function Navbar(){
const {carts}=useContext(Econtext)
const {user, loginWithRedirect,isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  console.log(user);



console.log("data from the context",carts);
    return<>
        
    <div className="nav-bar">
    <div className="logo">
    <img src={Anita} alt="Anita"/>
    </div>
  
     <ul className="nav justify-content-center">
                        <li className="nav-item">

                       <NavLink to="/home">Home</NavLink></li>
    <li>
           <NavLink to="/best-product">Best Product</NavLink> 
         </li> 
 <li><NavLink to ="/sell">Sell</NavLink></li> 
        
        <li><NavLink to="/contact-us">Contact US</NavLink></li> 
            
             <li><NavLink to="/cart-details"><i className="bi bi-cart"> <span className='badge badge-warning' id='lblCartCount'>{carts.length} </span></i></NavLink>
             </li>
            
             <li>
      {!isAuthenticated ?<>
        
        <button type="button" className="btn btn-primary" onClick={loginWithRedirect}>
          <i className="bi bi-person-circle"></i>  Login

        </button >
        
          
              </>
           
       : (
        <button type="button" className="btn btn-danger"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          <i className="bi bi-person-circle"></i> Logout
        </button>
      )}
    </li>

           </ul> 
                   
                 </div> 
   
     
    
    </>
}
export default Navbar;