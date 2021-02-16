import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Heading from "../components/heading"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import FrontendIcon from "../assets/icons/frontend-icon.svg"
import BackendIcon from "../assets/icons/backend-icon.svg"
import OtherIcon from "../assets/icons/other-icon.svg"
import SoftIcon from "../assets/icons/soft-icon.svg"

const About = styled.section`
  position: relative;
  padding-top: 150px;
`

const PurpleBackground = styled.div`
  margin-top: 155px;
  border-radius: 0 50px 50px 0;
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: -1;
  width: 50%;
  background-color: ${({ theme }) => theme.color.backgroundPurple};
  height: 510px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 50%);
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${p => p.theme.color.primary};
  width: 500px;
  line-height: 1.8;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Skills = styled.section`
  width: 876px;
  margin: 140px auto 0 auto;
`

const SkillsGrid = styled.div`
  margin: 105px 0 200px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 24px;
  grid-row-gap: 120px;
`

const SkillHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`

const SkillList = styled.ul`
  margin-top: 30px;
  margin-left: 40px;

  li {
    list-style: initial;
    font-size: 18px;
    font-weight: 700;
    color: ${p => p.theme.color.secondary};
    margin: 9px 0;
  }
`

const AboutMe = ({ data }) => {
  return (
    <Layout>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </Text>
          </TextWrapper>
          <ImageWrapper>
            <Img fixed={data.file.childImageSharp.fixed} />
          </ImageWrapper>
        </Container>
        <PurpleBackground />
      </About>

      <Skills>
        <Heading main="Moje umiejętności" secondary="O mnie" />
        <SkillsGrid>
          <div>
            <SkillHeading>
              <FrontendIcon />
              <h3>Frontend</h3>
            </SkillHeading>
            <SkillList>
              <li>HTML</li>
              <li>CSS (styled-components)</li>
              <li>Typescript</li>
            </SkillList>
          </div>
          <div>
            <SkillHeading>
              <BackendIcon />
              <h3>Backend</h3>
            </SkillHeading>
            <SkillList>
              <li>HTML</li>
              <li>CSS (styled-components)</li>
              <li>Typescript</li>
            </SkillList>
          </div>
          <div>
            <SkillHeading>
              <OtherIcon />
              <h3>Inne</h3>
            </SkillHeading>
            <SkillList>
              <li>HTML</li>
              <li>CSS (styled-components)</li>
              <li>Typescript</li>
            </SkillList>
          </div>
          <div>
            <SkillHeading>
              <SoftIcon />
              <h3>Umiejętności miękkie</h3>
            </SkillHeading>
            <SkillList>
              <li>HTML</li>
              <li>CSS (styled-components)</li>
              <li>Typescript</li>
            </SkillList>
          </div>
        </SkillsGrid>
      </Skills>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fixed(width: 520) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutMe
