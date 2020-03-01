import React from 'react';
import { withPrefix } from 'gatsby';
import GoogleFontLoader from 'react-google-font-loader';

import SEO from '../components/seo';
import juantonLogo from '../images/juanton_logo_cropped.png';

import '../components/css/original.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {typeof document !== 'undefined' && (
      <GoogleFontLoader
        fonts={[
          {
            font: 'Josefin Sans',
            weights: [300, 400, 600, 700, '400i']
          }
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
    )}
    <div className="full_width">
      <div className="top">
        <div className="wrapper">
          <header className="logo">
            <img
              src={juantonLogo}
              alt="JV - Initials of Juan
                  Villalobos"
            />
          </header>
          <h3 className="heroline">Hi, I&lsquo;m Juanton. I make beats.</h3>
          <h2 className="name_position">Juanton</h2>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          {/* <header>
            <ul className="nav">
              <li>
                <Link to="/page-2/">Home</Link>
              </li>
            </ul>
          </header> */}
          <h2 className="name_position">Music</h2>
          <div className="coming_soon">
            <h3>Site Coming Soon</h3>
            <p>
              I&lsquo;m currently in the process of building out my website
              using Gatsby. In the meantime, you can check out some of
              {/* <Link to="/page-2/">&nbsp;my music on soundcloud!</Link> */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://soundcloud.com/juantonmusic"
              >
                &nbsp;my music on soundcloud!
              </a>
            </p>
            <div className="button_container">
              <a
                className="button"
                rel="noopener noreferrer"
                href={withPrefix('/documents/JuantonEPK.pdf')}
                target="_blank"
              >
                Juanton&lsquo;s EPK
              </a>
              {/* <a
              target="_blank"
              className="button"
              href="assets/documents/JuantonEPK.pdf"
            >
              Juanton&lsquo;s EPK
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
