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
  padding-top: 70px;

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

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 90vh;
    transform: translateY(-3rem);
  }
`

const StyledHeading = styled(Heading)`
  text-align: left;
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 41px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Categories = styled.section`
  position: relative;
  padding-top: 70px;
  margin-top: 120px;
  margin-bottom: 170px;

  @media screen and (max-width: 600px) {
    margin: 0 -2rem;
    padding: 0 2rem;
  }
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

const Blog = ({ data }) => {
  console.log(data)

  return (
    <Layout>
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
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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

// query ($tag: String) {
//   articles: allMdx(filter: {frontmatter: {category: {in: [$tag]}}}) {
//     nodes {
//       frontmatter {
//         title
//         slug
//         date
//       }
//     }
//   }
//   tags: allMdx {
//     group(field: frontmatter___category) {
// 			tag: fieldValue
//   	}
//   }
// }
