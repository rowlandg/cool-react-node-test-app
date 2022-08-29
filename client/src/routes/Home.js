import React, { Component } from "react";
import User from '../auth/profile';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HOME</h2>
        <p>Home screen which is loaded first on visiting app.</p>
        <User />
      </div>
    );
  }
}
 
export default Home;