import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import "./App.css";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <PrivateRoutes/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
