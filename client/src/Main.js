import React from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import Stuff from "./routes/Stuff";
import Contact from "./routes/Contact";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './auth/login';
import LogoutButton from './auth/logout';
//import User from './auth/profile';
 
function Main() {

    const { isAuthenticated } = useAuth0();
  
    return (
        <HashRouter>
            <div className = "App">
                {isAuthenticated ? (
                    <div>
                        <h1>Cool React Node SP App</h1>
                        <ul className="header">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><LogoutButton /></li>
                            {/* <li><User /></li> */}
                        </ul>
                        <div className="content">
                            <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route path="/stuff" element={<Stuff/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                            </Routes>
                        </div>
                    </div>
                ) : 
                    <div>
                        <h1>Cool React Node SP App</h1>
                        <h2>Welcome</h2>
                        <p style={{ fontSize: "1rem" }}>Please Login.</p>
                        <LoginButton />
                    </div>
                }
            </div>
        </HashRouter>
    );
}
 
export default Main;