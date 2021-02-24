import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticleLink from "../components/articleLink"
import Heading from "../components/heading"
import Layout from "../components/layout"
import Container from "../components/container"
import EmailInput from "../components/emailInput"

const ArticlesWrapper = styled.section`
  width: 57rem;
  margin: 7rem auto;

  h4 {
    font-size: 4.2rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Newsletter = styled.section`
  position: relative;
  padding: 70px 0;

  @media screen and (max-width: 600px) {
    margin: 0 -2rem;
  }
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
  width: 45%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3.5rem 4.5rem;
  border-radius: 2.5rem;
  box-shadow: ${p => p.theme.shadow.email};
  background-color: ${p => p.theme.color.white};

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: calc(100% + 4rem);
    border-radius: 0;
    padding: 0.5rem 2rem;
    margin: 0 -2rem;
  }
`

const NewsletterFlex = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    margin-bottom: 10rem;
  }
`

const Blog = ({ pageContext, data }) => {
  return (
    <Layout>
      <ArticlesWrapper>
        <Heading main={pageContext.category} secondary="Kategoria" />
        {data.allMdx.nodes.map(({ frontmatter }) => (
          <ArticleLink
            date={frontmatter.date}
            title={frontmatter.title}
            url={`/blog/${frontmatter.slug}`}
            sm
          />
        ))}
      </ArticlesWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { category: { eq: $category } } }
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
