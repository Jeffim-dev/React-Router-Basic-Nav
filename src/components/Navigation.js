import React from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to ="/">Home</Link>
        </div>
        <div>
          <Link to ="/about">About</Link>
        </div>
        <div>
          <Link to ="/contact">Contact</Link>
        </div>
      </div>

      <Route path = "/" exact component={Home} />
      <Route path = "/about" exact component={About} />
      <Route path = "/contact" exact component={Contact} />
    </div>
  );
};

export default Navigation;
