
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Sell from './components/Sell';
import ContactUs from './components/ContatUS';
import Shop from './components/BestProduct';
import CartDetails from './components/CartDetails';
function App(){
  return <>
    <RouterProvider router={router} /> 

  </>

}

   const router =createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,  
      children: [
        {
          path: "/sell",
          element: <Sell/>,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path:"/home",
          element: <Home />,
        },
        {
          path:"/best-product",
          element:<Shop/>,

        },
        {
          path:"/cart-details",
          element:<CartDetails/>
        }
        
        ],
    },
  
  ]);

 
export default App;