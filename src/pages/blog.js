import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticleLink from "../components/articleLink"
import Heading from "../components/heading"
import Layout from "../components/layout"
import Container from "../components/container"
import EmailInput from "../components/emailInput"
import CategoryLink from "../components/categoryLink"

const ArticlesWrapper = styled.section`
  width: 570px;
  margin: 70px auto;

  h4 {
    font-size: 42px;
    margin-bottom: 30px;
  }
`

const Newsletter = styled.section`
  position: relative;
  padding-top: 70px;
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

const PinkBackground = styled.div`
  position: absolute;
  border-radius: 50px 0 0 50px;
  right: 0%;
  top: 0%;
  left: auto;
  bottom: auto;
  z-index: -1;
  width: 60%;
  background-color: ${({ theme }) => theme.color.backgroundPink};
  height: 492px;
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
  margin-top: 120px;
  margin-bottom: 170px;
`

const EmailWrapper = styled.div`
  width: 45%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px 45px;
  border-radius: 25px;
  box-shadow: ${p => p.theme.shadow.email};
  background-color: ${p => p.theme.color.white};
`

const NewsletterFlex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <ArticlesWrapper>
        <Heading main="Artykuły" secondary="Blog" />
        <h4>2021</h4>
        {[...Array(5)].map(el => (
          <ArticleLink
            date="Sty 21"
            title="Tytuł Artykułu ktory jest długi"
            url="/xd"
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

      <ArticlesWrapper>
        {[...Array(2)].map(el => (
          <ArticleLink
            date="Sty 21"
            title="Tytuł Artykułu ktory jest długi"
            url="/xd"
            sm
          />
        ))}
      </ArticlesWrapper>
      <ArticlesWrapper>
        <h4>2020</h4>
        {[...Array(6)].map(el => (
          <ArticleLink
            date="Sty 21"
            title="Tytuł Artykułu ktory jest długi"
            url="/xd"
            sm
          />
        ))}
      </ArticlesWrapper>

      <Categories>
        <Container>
          <StyledHeading main="Kategorie" secondary="Blog" alignLeft />
          <CategoriesGrid>
            {[...Array(8)].map(el => (
              <CategoryLink
                image={data.file.childImageSharp.fixed}
                text="React"
                url="/xd"
              />
            ))}
          </CategoriesGrid>
        </Container>
        <PinkBackground />
      </Categories>
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

export default Blog
