import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import Container from "../components/container"
import Heading from "../components/heading"
import ArticleLink from "../components/articleLink"
import CategoryLink from "../components/categoryLink"

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
    margin-bottom: 110px;
  }

  #newsletter {
    background-color: ${({ theme }) => theme.color.background};
    display: block;
    width: 370px;
    height: 54px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    margin-bottom: 38px;
  }

  #newsletter-submit {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: none;
    height: 100%;
    width: 131px;
    border-radius: 15px;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    letter-spacing: 1px;
  }

  #newsletter-email {
    font-size: 18px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.color.primary};
    height: 100%;
    width: auto;
    padding-left: 15px;
    outline: none;

    ::placeholder {
      font-size: 18px;
      font-family: "Karla", sans-serif;
      color: ${({ theme }) => theme.color.lightText};
    }
  }

  .newsletter-text {
    font-size: 18px;

    &__emoji {
      margin-right: 5px;
    }
  }
`

const Latest = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 60px;
`

const ArticlesWrapper = styled.div`
  width: 570px;
`

const StyledHeading = styled(Heading)`
  text-align: left;
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
        <form id="newsletter">
          <input id="newsletter-email" type="email" placeholder="Adres email" />
          <input id="newsletter-submit" type="submit" value="Zapisz" />
        </form>
        <span className="newsletter-text">
          <span
            className="newsletter-text__emoji"
            role="img"
            aria-label="Party popper emoji"
          >
            🎉
          </span>
          Dołącz do newslettera i poznawaj na bieżąco świat frontendu!
        </span>
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
          <StyledHeading main="Kategorie" secondary="Blog" alignLeft />
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
        <StyledHeading main="Popularne artykuły" secondary="Blog" />
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

      <Footer />
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
