import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ProjectShowcase from "./pages/ProjectShowcase";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={AboutMe}/>
          <Route path="/projects" component={ProjectShowcase}/>
          <Route path="/resume" component={Resume}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
