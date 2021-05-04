import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import Callout from "../components/Callout"
import Code from "../components/code"
import Layout from "../components/layout"

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
  font-size: 3.6rem;
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
  font-size: 1.4rem;
  font-weight: 700;
`
const Date = styled.span`
  color: ${p => p.theme.color.grayText};
  font-size: 1.2rem;
`

const Content = styled.section`
  width: 57.6rem;
  margin: 0 auto 12rem auto;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const H2 = styled.h2`
  font-family: "Karla", sans-serif;
  font-size: 3rem;
  margin-bottom: 2rem;
`
const P = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 3.5rem;
`

const Post = ({ data }) => {
  return (
    <Layout>
      <Heading>
        <Category>Typescript</Category>
        <Title>
          Using Shortcuts and serverless to build a personal Apple Health API
        </Title>
        <DetailsWrapper>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Miniaturka zdjęcia autora bloga"
          />
          <DetailsTextWrapper>
            <Author>Nikolas Barwicki</Author>
            <Date>21 styczeń 2021</Date>
          </DetailsTextWrapper>
        </DetailsWrapper>
      </Heading>
      <Content>
        <H2>Umiejętności miękkie</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          cursus, ligula in blandit sagittis, arcu ligula tristique lorem, ut
          mattis leo ligula posuere libero. Donec sit amet nunc felis. Morbi
          placerat placerat maximus. Nunc at sagittis quam, sed ullamcorper
          nisi. Curabitur nec odio nec odio hendrerit posuere eu ac purus. Morbi
          sollicitudin sit amet lectus viverra egestas. Mauris lorem dui,
          vestibulum eu massa ac, efficitur gravida enim. In dictum bibendum
          velit nec suscipit. Donec aliquam fringilla est, ac viverra ante
          gravida quis. Vivamus ultricies fringilla lectus a pharetra. Donec
          rhoncus diam at massa pulvinar dapibus.
        </P>
        <P>
          Phasellus mollis tortor mi, quis tempor ipsum convallis at. Maecenas
          eu justo tristique, pulvinar quam convallis, consequat purus. Quisque
          eget leo convallis, fermentum lacus sit amet, condimentum magna.
          Phasellus volutpat eleifend semper.
        </P>
        <Callout>
          hasellus mollis tortor mi, quis tempor ipsum convallis at. Maecenas eu
          justo tristique
        </Callout>
        <H2>Umiejętności miękkie</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          cursus, ligula in blandit sagittis, arcu ligula tristique lorem, ut
          mattis leo ligula posuere libero. Donec sit amet nunc felis. Morbi
          placerat placerat maximus. Nunc at sagittis quam, sed ullamcorper
          nisi. Curabitur nec odio nec odio hendrerit posuere eu ac purus. Morbi
          sollicitudin sit amet lectus viverra egestas. Mauris lorem dui,
          vestibulum eu massa ac, efficitur gravida enim. In dictum bibendum
          velit nec suscipit. Donec aliquam fringilla est, ac viverra ante
          gravida quis. Vivamus ultricies fringilla lectus a pharetra. Donec
          rhoncus diam at massa pulvinar dapibus.
        </P>
        <P>
          Phasellus mollis tortor mi, quis tempor ipsum convallis at. Maecenas
          eu justo tristique, pulvinar quam convallis, consequat purus. Quisque
          eget leo convallis, fermentum lacus sit amet, condimentum magna.
          Phasellus volutpat eleifend semper.
        </P>
        <Callout variant="yellow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          cursus, ligula in blandit sagittis
        </Callout>
        <Callout variant="red">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          cursus, ligula in blandit sagittis
        </Callout>
        <Callout variant="purple">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          cursus, ligula in blandit sagittis
        </Callout>
        <Code />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          cursus, ligula in blandit sagittis, arcu ligula tristique lorem, ut
          mattis leo ligula posuere libero. Donec sit amet nunc felis. Morbi
          placerat placerat maximus. Nunc at sagittis quam, sed ullamcorper
          nisi. Curabitur nec odio nec odio hendrerit posuere eu ac purus. Morbi
          sollicitudin sit amet lectus viverra egestas. Mauris lorem dui,
          vestibulum eu massa ac, efficitur gravida enim. In dictum bibendum
          velit nec suscipit. Donec aliquam fringilla est, ac viverra ante
          gravida quis. Vivamus ultricies fringilla lectus a pharetra. Donec
          rhoncus diam at massa pulvinar dapibus.
        </P>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  {
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
