import React, { Component } from "react";
import "./work-history.css";

import Header from "../../components/header/header.js";
import Main from "../../components/main/main.js";
import Footer from "../../components/footer/footer.js";

class WorkHistory extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main">WORK HISTORY</main>
        <Footer />
      </div>
    );
  }
}

export default WorkHistory;
