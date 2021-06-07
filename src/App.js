import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import DispalyProjects from "./Components/DispalyProjects/DispalyProjects";
import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/displayprojects">
         <DispalyProjects></DispalyProjects>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="/contact">
         <Contact></Contact>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
