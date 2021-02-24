import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import CategoryLink from "../components/categoryLink"
import Heading from "../components/heading"
import Container from "../components/container"
import Img from "gatsby-image"

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

const categories = ({ data }) => {
  const getCategoryImage = name => {
    return data.allFile.nodes.filter(img => img.name.includes(name))[0]
      .childImageSharp.fixed
  }

  return (
    <Layout>
      <Categories>
        <Container>
          <StyledHeading main="Kategorie" secondary="Blog" alignLeft />
          <CategoriesGrid>
            {data.allMdx.group.map(({ fieldValue }) => (
              <CategoryLink
                image={getCategoryImage(fieldValue)}
                text={fieldValue}
                url={fieldValue}
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
    allFile(filter: { name: { regex: "/cat_/" } }) {
      nodes {
        name
        childImageSharp {
          fixed(width: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    allMdx {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
`

export default categories
