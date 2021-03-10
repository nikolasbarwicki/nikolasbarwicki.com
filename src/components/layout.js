import "@fontsource/karla"
import "@fontsource/space-grotesk"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import { theme } from "../styles/theme"
import Footer from "./footer"
import Header from "./header"

const Container = styled.main`
  padding: 0 2rem;
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
