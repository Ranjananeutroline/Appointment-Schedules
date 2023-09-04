import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import "./App.css";


function App() {
  return (
    <div className="App">
     
     <PrivateRoutes/>
    
     
    </div>
  );
}

export default App;
