import React, { Component } from "react";
import "./home.css";

import Header from "../../components/header/header.js";
import Main from "../../components/main/main.js";
import Footer from "../../components/footer/footer.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1>Adam T Penrose Morey</h1>
          <img src="" className="featured-img" alt="photo of author" />
          <h2>About Me</h2>
          <article className="bio">
            <h3>Bio</h3>
            I'm from this one place, I do stuff on a computer, and more.
          </article>
          <article className="why-helio">
            <h3>Why Helio?</h3>
            Why not Zoidberg?
          </article>
          <section>
            <h3>Other info:</h3>
            <h4>
              <a href="/work-history">Work Experience</a>
            </h4>
          </section>
          <section className="social">
            <h4>Social Links:</h4>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
