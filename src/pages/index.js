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
  margin-top: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 30px;
  }

  .hero-text {
    width: 350px;
    text-align: center;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.secondary};
    margin-bottom: 70px;
  }
`

const Latest = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  margin-bottom: 60px;
`

const ArticlesWrapper = styled.div`
  width: 570px;
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 41px;
`

const Categories = styled.section`
  position: relative;
  padding-top: 70px;
`

const PurpleBackground = styled.div`
  border-radius: 0 50px 50px 0;
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: -1;
  width: 60%;
  background-color: ${({ theme }) => theme.color.backgroundPurple};
  height: 310px;
`

const IndexPage = ({ data }) => {
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
          <ArticleLink
            date="Styczeń 21, 2021"
            title="Tytuł artykułu"
            url="/xd"
          />
          <ArticleLink
            date="Styczeń 21, 2021"
            title="Tytuł artykułu"
            url="/xd"
          />
          <ArticleLink
            date="Styczeń 21, 2021"
            title="Tytuł artykułu"
            url="/xd"
          />
        </ArticlesWrapper>
      </Latest>

      <Categories>
        <Container>
          <Heading main="Kategorie" secondary="Blog" alignLeft />
          <CategoriesGrid>
            <CategoryLink
              image={data.file.childImageSharp.fixed}
              text="React"
              url="/xd"
            />
            <CategoryLink
              image={data.file.childImageSharp.fixed}
              text="React"
              url="/xd"
            />
            <CategoryLink
              image={data.file.childImageSharp.fixed}
              text="React"
              url="/xd"
            />
            <CategoryLink
              image={data.file.childImageSharp.fixed}
              text="React"
              url="/xd"
            />
          </CategoriesGrid>
        </Container>
        <PurpleBackground />
      </Categories>

      <Latest>
        <Heading main="Popularne artykuły" secondary="Blog" />
        <ArticlesWrapper>
          <ArticleLink
            date="Styczeń 21, 2021"
            title="Tytuł artykułu"
            url="/xd"
          />
          <ArticleLink
            date="Styczeń 21, 2021"
            title="Tytuł artykułu"
            url="/xd"
          />
          <ArticleLink
            date="Styczeń 21, 2021"
            title="Tytuł artykułu"
            url="/xd"
          />
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
  }
`

export default IndexPage
