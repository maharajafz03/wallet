import Login from "./pages/Login";
import Home from "./pages/Home"
//import Singup from "./pages/Singup"
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  
  
  return (
      
       <div>
      {/* <Router>
        <Routes>
        <Route path="/Singup" element={<Singup />} />
        </Routes>
      </Router>
      
       */}
        <div>
          <Home />
          <Login />
          {/* <Singup /> */}
        </div>
      </div>

  )
};

export default App;