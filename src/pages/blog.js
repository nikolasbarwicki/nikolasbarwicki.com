import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ArticleLink from "../components/articleLink"
import Container from "../components/container"
import EmailInput from "../components/emailInput"
import Heading from "../components/heading"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../styles/breakpoint"

const ArticlesWrapper = styled.section`
  width: 100%;
  margin: 7rem auto;

  ${device.md} {
    width: 57rem;
  }

  h4 {
    font-size: 4.2rem;
    margin-bottom: 3rem;
    margin-top: 10rem;
  }
`

const Newsletter = styled.section`
  position: relative;
  margin: 0 -2rem;
  padding: 7rem 0 0;
`

const PurpleBackground = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: -1;
  width: 100%;
  background-color: ${({ theme }) => theme.color.backgroundPurple};
  height: 252px;
`

const StyledHeading = styled(Heading)`
  text-align: left;
`

const EmailWrapper = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: ${p => p.theme.shadow.email};
  background-color: ${p => p.theme.color.white};
  width: calc(100% + 4rem);
  border-radius: 0;
  padding: 0.5rem 2rem;
  margin: 0 -2rem;

  ${device.md} {
    height: 22rem;
    width: 50%;
    margin-right: 1rem;
    border-radius: 2.5rem;
    padding: 1.5rem 2.5rem;
  }

  ${device.lg} {
    width: 53rem;
    margin: 0;
    padding: 3.5rem 4.5rem;
  }
`

const NewsletterFlex = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  padding: 0 2rem;
  margin-bottom: 10rem;

  ${device.md} {
    flex-direction: row;
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />

      <ArticlesWrapper>
        <Heading main="Artykuły" secondary="Blog" />
        <h4>2021</h4>
        {data.allMdx.nodes.map(({ frontmatter }) => (
          <ArticleLink
            date={frontmatter.date}
            title={frontmatter.title}
            url={`/blog/${frontmatter.slug}`}
            sm
          />
        ))}
      </ArticlesWrapper>

      <Newsletter>
        <Container>
          <NewsletterFlex>
            <StyledHeading main="Newsletter" secondary="Blog" alignLeft />
            <EmailWrapper>
              <h3>Zapisz się</h3>
              <EmailInput />
            </EmailWrapper>
          </NewsletterFlex>
        </Container>
        <PurpleBackground />
      </Newsletter>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date(locale: "PL", formatString: "MMM DD")
          slug
          title
        }
      }
    }
  }
`

export default Blog
