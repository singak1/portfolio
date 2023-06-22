import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h2>Akash's Porfoilo</h2>
      </div>
    </Router>
  );
}

export default App;
