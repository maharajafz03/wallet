<<<<<<< HEAD
import { useState } from "react";
import Authscreen from "./pages/auth_screen/Authscreen";
import Home from "./pages/Home";
=======
//import Login from "./pages/Login";
//import Home from "./pages/Home"
import Auth from "./pages/Auth";
//import Singup from "./pages/Singup"
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> origin/main

const App: React.FC = () => {
  
  const [IsUser, SetIsUser] = useState(false)
  

  const result: string = "Admin";
  
 const handelstate = () => {
    
   if (result === "Admin") {
    SetIsUser(!false)
   } else {
    SetIsUser(false)
   }
  } 


  return (
      
       <div>
<<<<<<< HEAD
       
        { !IsUser ? 
       <Authscreen />
           : <Home />
      
      }
      <button onClick={handelstate}>Go</button>
=======
      <Auth / >
>>>>>>> origin/main
      </div>

  )
};

export default App;