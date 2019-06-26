import React, { Component } from "react";
import "./header.css";
import Nav from "../nav/nav.js";

class Header extends Component {
  render() {
    return (
      <header className="head-home">
        <Nav />
      </header>
    );
  }
}

export default Header;
