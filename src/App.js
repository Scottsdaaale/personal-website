import "./App.css";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Main from "./components/Main";
import Side from "./components/Side";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Navbar, Side, Socials, Home, AboutMe, ProjectShowcase, Resume} from './components'

function App() {
  return (
    <div className="app">
      <div className="bg-image">
        {/* <img src="/background.jpg" alt="Background" /> */}
      </div>
      <Router>
        <Navbar />
        <Socials />
        <Main />
        <Side />
      </Router>
    </div>
  );
}

export default App;
