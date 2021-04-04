import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import BackendIcon from "../assets/icons/backend-icon.svg"
import FrontendIcon from "../assets/icons/frontend-icon.svg"
import OtherIcon from "../assets/icons/other-icon.svg"
import SoftIcon from "../assets/icons/soft-icon.svg"
import Dots from "../assets/images/dots.svg"
import Heading from "../components/heading"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { device } from "../styles/breakpoint"

const About = styled.section`
  position: relative;

  margin: 0 -2rem;
  padding: 15rem 2rem 0 2rem;
`

const PurpleBackground = styled.div`
  margin-top: 15.5rem;
  border-radius: 0 5rem 5rem 0;
  position: absolute;
  left: 0%;
  right: auto;
  bottom: auto;
  z-index: -1;
  background-color: ${({ theme }) => theme.color.backgroundPurple};
  max-width: 140rem;
  height: 51rem;
  top: -7rem;

  ${device.md} {
    top: -4rem;
    width: 50%;
    height: 52rem;
  }

  ${device.lg} {
    width: 58%;
    top: 0;
    height: 44rem;
  }
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${device.md} {
    max-width: 117rem;
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;
  }

  ${device.lg} {
    max-width: 117rem;
    display: grid;
    align-items: center;
    grid-template-columns: 60% 40%;
  }
`

const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${p => p.theme.color.primary};
  width: 100%;
  line-height: 1.8;

  ${device.md} {
    width: 90%;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`

const ImageWrapper = styled.div`
  margin-top: 9rem;
  position: relative;

  ${device.md} {
    margin-left: 5rem;
    margin-top: 3rem;
    width: auto;
    margin-right: 4rem;
  }
`

const StyledDots = styled(Dots)`
  position: absolute;
  z-index: 1;
`

const StyledImage = styled(Img)`
  margin-top: 5rem;

  ${device.md} {
    margin-left: 5rem;
    width: 100%;
  }

  ${device.lg} {
    width: 36.5rem;
  }
`

const Skills = styled.section`
  width: 90rem;
  margin: 14rem auto 0 auto;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const SkillsGrid = styled.div`
  margin: 10.5rem 0 20rem;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 12px));
  grid-column-gap: 2.4rem;
  grid-row-gap: 3rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
    margin: 10.5rem 0 10rem;
  }
`

const SkillHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
`

const SkillItem = styled.div`
  padding: 4rem;
  border-radius: 2rem;
  transition: box-shadow 200ms ease-in;

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transition: box-shadow 200ms ease-in;
  }
`

const SkillList = styled.ul`
  margin-top: 3rem;
  margin-left: 4rem;

  li {
    list-style: initial;
    font-size: 1.8rem;
    font-weight: 700;
    color: ${p => p.theme.color.secondary};
    margin: 0.9rem 0;
  }
`

const AboutMe = ({ data }) => {
  return (
    <Layout>
      <SEO title="O mnie" />

      <About>
        <Container>
          <TextWrapper>
            <Heading
              main="O mnie"
              secondary="Miło Cię poznać"
              alignLeft
              noMargin
            />
            <Text>
              Zafascynowany Javascriptem i możliwościami, które oferuje.
              Eksploruje zarówno frontend jak i backend aplikacji webowych.
              Posiada niesłabnący apetyt do nauki nowych rzeczy i ciągłego
              doskonalenia posiadanej wiedzy.
            </Text>
            <Text>
              Aktualnie zgłębia tajniki technologii backendowych oraz stara się
              zrozumieć zawiłości technologii blockchain
            </Text>
          </TextWrapper>
          <ImageWrapper>
            <StyledDots />
            <StyledImage fluid={data.person.childImageSharp.fluid} />
          </ImageWrapper>
        </Container>
        <PurpleBackground />
      </About>

      <Skills>
        <Heading main="Moje umiejętności" secondary="O mnie" />
        <SkillsGrid>
          <SkillItem>
            <SkillHeading>
              <FrontendIcon />
              <h3>Frontend</h3>
            </SkillHeading>
            <SkillList>
              <li>HTML, CSS (styled-components)</li>
              <li>Javascript (ESNext), Typescript</li>
              <li>React, Redux, REST API</li>
              <li>Gatsby, NextJS</li>
              <li>react-query, Formik</li>
            </SkillList>
          </SkillItem>
          <SkillItem>
            <SkillHeading>
              <BackendIcon />
              <h3>Backend</h3>
            </SkillHeading>
            <SkillList>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB, PostgreSQL</li>
            </SkillList>
          </SkillItem>
          <SkillItem>
            <SkillHeading>
              <OtherIcon />
              <h3>Inne</h3>
            </SkillHeading>
            <SkillList>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>Figma, AdobeXD</li>
            </SkillList>
          </SkillItem>
          <SkillItem>
            <SkillHeading>
              <SoftIcon />
              <h3>Umiejętności miękkie</h3>
            </SkillHeading>
            <SkillList>
              <li>Ciągła chęć rozwoju</li>
              <li>Umiejętność pracy w zespole</li>
              <li>Proaktywność</li>
            </SkillList>
          </SkillItem>
        </SkillsGrid>
      </Skills>
    </Layout>
  )
}

export const query = graphql`
  {
    person: file(relativePath: { eq: "Group 43.png" }) {
      childImageSharp {
        fluid(maxWidth: 520, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dots: file(relativePath: { eq: "dots.png" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutMe
