import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Callout from "../components/Callout"
import Code from "../components/code"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

const Heading = styled.section`
  width: 57.6rem;
  margin: 11rem auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Category = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${p => p.theme.color.grayText};
  text-transform: uppercase;
`

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin: 0.5rem 0 4rem;
`

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const DetailsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Author = styled.span`
  color: ${p => p.theme.color.secondary};
  font-size: 1.6rem;
  font-weight: 700;
`
const Date = styled.span`
  color: ${p => p.theme.color.grayText};
  font-size: 1.4rem;
`

const Content = styled.section`
  width: 57.6rem;
  margin: 0 auto 12rem auto;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Heading2 = styled.h2`
  font-family: "Karla", sans-serif;
  font-size: 3.2rem;
  margin-bottom: 2rem;
`
const Paragraph = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  code {
    background-color: rgb(41, 44, 52);
    color: #fff;
    font-size: 1.6rem;
    font-family: monospace;
    border-radius: 0.5rem;
    padding: 4px 6px;
  }

  a {
    color: ${({ theme }) => theme.color.lightBlue};
  }
`

const UnorderedList = styled.ul`
  font-family: "Karla", sans-serif;
  font-size: 2rem;
  margin-bottom: 3.5rem;

  code {
    background-color: rgb(41, 44, 52);
    color: #fff;
    font-size: 1.6rem;
    font-family: monospace;
    border-radius: 0.5rem;
    padding: 4px 6px;
  }

  li {
    list-style: initial;
    line-height: 1.8;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
`

const components = {
  pre: Code,
  Callout,
  p: Paragraph,
  h2: Heading2,
  ul: UnorderedList,
}

const Post = ({ data }) => {
  const {
    mdx: { frontmatter, body },
  } = data

  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <Heading>
        <Category>{frontmatter.category}</Category>
        <Title>{frontmatter.title}</Title>
        <DetailsWrapper>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Miniaturka zdjęcia autora bloga"
          />
          <DetailsTextWrapper>
            <Author>Nikolas Barwicki</Author>
            <Date>{frontmatter.date}</Date>
          </DetailsTextWrapper>
        </DetailsWrapper>
      </Heading>
      <Content>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        category
        date(locale: "PL", formatString: "DD MMMM YYYY")
      }
      body
    }
    file(relativePath: { eq: "profile-big.png" }) {
      childImageSharp {
        fixed(width: 40, quality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Post
