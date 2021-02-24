import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"

import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"

const Container = styled.main`
  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>{children}</Container>

      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
