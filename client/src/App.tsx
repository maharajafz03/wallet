import Login from "./pages/Login";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  
  
  return (
      
       
        <div>
          <Home />
          <Login />
        </div>

  )
};

export default App;