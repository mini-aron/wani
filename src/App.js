
import { Routes } from "react-router";
import {
  BrowserRouter as Router,
  Route,useLocation,
} from "react-router-dom";


import Home from "./pages/Home";
import Webtoon from "./pages/Webtoon";
import Today from "./pages/Today";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webtoon" element={<Webtoon/>}/>
        <Route path="/today_webtoon" element={<Today/>}/>
      </Routes>
    </Router>
  );
}

export default App;