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
        <main className="main">
          <h1>Adam T Penrose Morey</h1>
          <img
            src="../../images/git_ur_base.png"
            className="featured-img"
            alt="photo of author"
          />
          <h2>About Me</h2>
          <article className="bio">
            <h3>Bio</h3>
            I'm from a place. I do stuff on a computer, and more.
          </article>
          <article className="why-helio">
            <h3>Why Helio?</h3>
            Why not Zoidberg?
          </article>
          <section>
            <h3>Other info:</h3>
            <h4>
              <ul>
                <li>
                  <a href="/work-history">Work History</a>
                </li>

                <li>
                  <a href="https://github.com/at0mt3a">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adam-morey-a1b1a117b/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </h4>
          </section>
          <section className="social">
            <h4>Social Links:</h4>
          </section>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
          <div>wank</div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
