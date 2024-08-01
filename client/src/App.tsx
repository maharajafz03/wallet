import { useState } from "react";
import Authscreen from "./pages/auth_screen/Authscreen";
import Home from "./pages/Home";

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
       
        { !IsUser ? 
       <Authscreen />
           : <Home />
      
      }
      <button onClick={handelstate}>Go</button>
      </div>

  )
};

export default App;