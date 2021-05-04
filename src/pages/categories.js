import React from "react"
import styled from "styled-components"
import CategoryLink from "../components/categoryLink"
import Container from "../components/container"
import Heading from "../components/heading"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { device } from "../styles/breakpoint"

const PinkBackground = styled.div`
  position: absolute;
  border-radius: 50px 0 0 50px;
  right: 0%;
  top: 0%;
  left: auto;
  bottom: auto;
  z-index: -1;
  background-color: ${({ theme }) => theme.color.backgroundPink};
  width: 80%;
  height: 90vh;
  transform: translateY(-3rem);
  margin: 0 -2rem;

  ${device.md} {
    width: 60%;
    height: 49rem;
  }
`

const StyledHeading = styled(Heading)`
  text-align: left;
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 41px;
  grid-template-columns: 1fr;

  ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Categories = styled.section`
  position: relative;
  margin: 10rem -2rem;
  padding: 0 2rem;

  ${device.md} {
    padding-top: 7rem;
    margin: 12rem 0rem 17rem 0rem;
  }
`

const categories = ({ data }) => {
  const getCategoryImage = name => {
    return data.allFile.nodes.filter(img => img.name.includes(name))[0]
      .childImageSharp.fixed
  }

  return (
    <Layout>
      <SEO title="Kategorie" />

      <Categories>
        <Container>
          <StyledHeading main="Kategorie" secondary="Blog" alignLeft />
          <CategoriesGrid>
            {data.allMdx.group.map(({ fieldValue }) => (
              <CategoryLink
                key={fieldValue}
                image={getCategoryImage(fieldValue)}
                text={fieldValue}
                url={`/blog/category/${fieldValue}`}
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
          fixed(height: 65) {
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
