import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/work-history">Work History</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
