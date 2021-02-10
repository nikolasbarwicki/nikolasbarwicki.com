import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/footer"
import Grid from "../components/grid"

const Hero = styled.section`
  grid-column: 3 / span 4;

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
  margin-top: 100px;

  grid-column: 3 / span 4;

  display: flex;
  flex-direction: column;
  align-items: center;

  .heading-span {
    font-weight: 700;
    font-size: 20;
    color: ${({ theme }) => theme.color.lightText};
    margin-bottom: 15px;
  }

  article {
    height: 127px;
    width: 100%;
    border-radius: 20px;
    margin-bottom: 43px;
    transition: box-shadow 200ms ease-in;

    :hover {
      box-shadow: ${({ theme }) => theme.shadow.card};
      transition: box-shadow 200ms ease-in;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px 35px;
    }

    div {
      display: flex;
      flex-direction: column;

      time {
        font-size: 15px;
        color: ${({ theme }) => theme.color.lightText};
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />

    <Grid>
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
    </Grid>

    <Grid>
      <Latest>
        <span className="heading-span">BLOG</span>
        <h2>Najnowsze artykuły</h2>
        <article>
          <Link>
            <div>
              <time>Styczeń 21, 2021</time>
              <h3>Tytuł artykułu</h3>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </Latest>
    </Grid>

    <section>
      <h2>Kategorie</h2>
      <Link>
        <img alt="React icon"></img>
        <span>React</span>
      </Link>
      <Link>
        <img alt="React icon"></img>
        <span>React</span>
      </Link>
      <Link>
        <img alt="React icon"></img>
        <span>React</span>
      </Link>
    </section>

    <section>
      <span>BLOG</span>
      <h2>Popularne artykuły</h2>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
    </section>

    <Footer />
  </Layout>
)

export default IndexPage
