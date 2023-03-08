
import { Routes } from "react-router";
import {
  BrowserRouter as Router,
  Route,useLocation,
} from "react-router-dom";


import Home from "../src/pages/Home";
import Webtoon from "../src/pages/Webtoon";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webtoon" element={<Webtoon/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;