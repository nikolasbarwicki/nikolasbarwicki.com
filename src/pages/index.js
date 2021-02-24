import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Container from "../components/container"
import Heading from "../components/heading"
import ArticleLink from "../components/articleLink"
import CategoryLink from "../components/categoryLink"
import EmailInput from "../components/emailInput"

const Hero = styled.section`
  grid-column: 3 / span 4;
  margin-top: 17rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 3rem;
  }

  .hero-text {
    font-size: 1.6rem;
    width: 35rem;
    text-align: center;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.secondary};
    margin-bottom: 7rem;
  }
`

const Latest = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;
  margin-bottom: 6rem;
`

const ArticlesWrapper = styled.div`
  width: 57rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin-top: 41px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Categories = styled.section`
  position: relative;
  padding-top: 7rem;
  padding: 7rem 2rem 0 2rem;
`

const PurpleBackground = styled.div`
  border-radius: 0 5rem 5rem 0;
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: -1;
  width: 60%;
  background-color: ${({ theme }) => theme.color.backgroundPurple};
  height: 31rem;

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 90vh;
    margin: 0 -2rem;
  }
`

const IndexPage = ({ data }) => {
  const getCategoryImage = name => {
    return data.categoriesImg.nodes.filter(img => img.name.includes(name))[0]
      .childImageSharp.fixed
  }

  return (
    <Layout>
      <SEO title="Home" />

      <Hero>
        <h1>Cześć, tu Nikolas</h1>
        <span className="hero-text">
          Witaj na moim blogu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </span>
        <EmailInput centered />
      </Hero>

      <Latest>
        <Heading main="Najnowsze artykuły" secondary="Blog" />
        <ArticlesWrapper>
          {data.allMdx.nodes.map(({ frontmatter }) => (
            <ArticleLink
              date={frontmatter.date}
              title={frontmatter.title}
              url={`/blog/${frontmatter.slug}`}
            />
          ))}
        </ArticlesWrapper>
      </Latest>

      <Categories>
        <Container>
          <Heading main="Kategorie" secondary="Blog" alignLeft />
          <CategoriesGrid>
            {data.categories.group.map(({ fieldValue }) => (
              <CategoryLink
                image={getCategoryImage(fieldValue)}
                text={fieldValue}
                url={`/blog/category/${fieldValue}`}
              />
            ))}
          </CategoriesGrid>
        </Container>
        <PurpleBackground />
      </Categories>

      <Latest>
        <Heading main="Popularne artykuły" secondary="Blog" />
        <ArticlesWrapper>
          {data.allMdx.nodes.map(({ frontmatter }) => (
            <ArticleLink
              date={frontmatter.date}
              title={frontmatter.title}
              url={`/blog/${frontmatter.slug}`}
            />
          ))}
        </ArticlesWrapper>
      </Latest>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fixed(width: 65) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 3) {
      nodes {
        frontmatter {
          date(locale: "PL", formatString: "MMM DD")
          slug
          title
        }
      }
    }
    categoriesImg: allFile(filter: { name: { regex: "/cat_/" } }) {
      nodes {
        name
        childImageSharp {
          fixed(width: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    categories: allMdx {
      group(field: frontmatter___category, limit: 4) {
        fieldValue
      }
    }
  }
`

export default IndexPage
