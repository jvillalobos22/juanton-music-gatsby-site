import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div class="full_width">
    <div class="top">
      <div class="wrapper">
        <header class="logo">
          <img
            src="assets/img/juanton_logo_cropped.png"
            alt="JV - Initials of Juan
                  Villalobos"
          />
          <SEO title="Home" />
        </header>
        <h3 class="heroline">Hi, I'm Juanton. I make beats.</h3>
        <h2 class="name_position">Juanton</h2>
      </div>
    </div>
    <div class="bottom">
      <div class="wrapper">
        <header>
          <ul class="nav">
            <li>
              <Link to="/page-2/">Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Say Hi</a>
            </li>
          </ul>
        </header>
        <h2 class="name_position">Music</h2>
        <div class="coming_soon">
          <h3>Site Coming Soon</h3>
          <p>
            I'm currently in the process of building out my website. In the
            meantime, you can check out some of
            <a target="_blank" href="https://soundcloud.com/juantonmusic">
              my music on soundcloud!
            </a>
          </p>
          <div class="button_container">
            <a
              target="_blank"
              class="button"
              href="assets/documents/JuantonEPK.pdf"
            >
              Juanton's EPK
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
