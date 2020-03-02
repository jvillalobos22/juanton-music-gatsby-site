import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import HeroImage from '../images/juanton_nye_14_1920x1280.jpg';
import juantonLogo from '../images/juanton_logo_cropped.png';

const HomePageBackground = styled.div`
  width: '100%';
  height: 100vh;
  background-image: url(${HeroImage});
  position: relative;
  z-index: 1;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    witdth: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const LayoutSC = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 16px;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

const JuantonLogoCenter = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
`;

const CallToAction = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const LinkToMusicButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 3px;
  border: 1px solid #fff;
  color: #fff;

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    color: #222;
  }
`;

const SecondPage = () => (
  <HomePageBackground>
    <LayoutSC>
      <SEO title="Juanton Music | Home" />
      <CenteredContent>
        <JuantonLogoCenter
          src={juantonLogo}
          alt="JV - Initials of Juan
                  Villalobos"
        />
        <CallToAction>
          <p>New music out now!</p>
          <LinkToMusicButton href="#">Listen Now</LinkToMusicButton>
          <LinkToMusicButton style={{ 'margin-left': '16px' }} href="#">
            Enter Site
          </LinkToMusicButton>
          {/* <Link to="/">Go back to the homepage</Link> */}
        </CallToAction>
      </CenteredContent>
    </LayoutSC>
  </HomePageBackground>
);

export default SecondPage;
