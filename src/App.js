import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchComponent from "./components/SwitchComponent";

function App() {
  return (
    <Router>
      <SwitchComponent />
    </Router>
  );
}

export default App;
