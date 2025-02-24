import React from "react";
import "./Subcription.css";
import SubscriptionImage from "./images/Subscription.jpg"; // Rename the image import

function Subscription(){
    return<>
    <div className="subs">
    <h2>How to sell Handmande <br/>
    Jewelery Online?</h2>
    <p>Sign up to Pabbly Subscription Billing</p>
    <p>Add Product & Plans</p>
    <p>Connect to a Payment Gateway</p>
    <p>Share Payment Link with your Customers</p>
    <p>Start Selling & Collect Payment Online</p>
    <img src={Subscription} alt="Subscription"/>
    
    </div>
    
    </>
    }

export default Subscription;