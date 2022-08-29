import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import Stuff from "./routes/Stuff";
import Contact from "./routes/Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Cool React Node SP App</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/stuff" element={<Stuff/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;