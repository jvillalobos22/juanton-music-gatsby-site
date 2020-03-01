/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const LayoutSC = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1420px;
    padding: 0 18px;
  `;

  return (
    <div className={className}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutSC>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Juanton Music</footer>
      </LayoutSC>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Layout.defaultProps = {
  className: ''
};

export default Layout;
