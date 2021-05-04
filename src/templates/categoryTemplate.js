import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ArticleLink from "../components/articleLink"
import Heading from "../components/heading"
import Layout from "../components/layout"

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

const Blog = ({ pageContext, data }) => {
  return (
    <Layout>
      <ArticlesWrapper>
        <Heading main={pageContext.category} secondary="Kategoria" />
        {data.allMdx.nodes.map(({ frontmatter }) => (
          <ArticleLink
            key={frontmatter.title}
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
