import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.article`
  width: 100%;
  padding: ${p => (p.sm ? "1.7rem 0" : "4rem 0")};
  border-radius: 2rem;
  margin-bottom: 4.3rem;
  transition: box-shadow 200ms ease-in;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transition: box-shadow 200ms ease-in;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.7rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};

    @media screen and (max-width: 600px) {
      padding: 0 1.8rem;
    }
  }

  div {
    display: flex;
    flex-direction: ${p => (p.sm ? "row" : "column")};
    align-items: ${p => (p.sm ? "center" : "flex-start")};

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }

    time {
      font-size: 1.5rem;
      min-width: 4.8rem;
      color: ${({ theme }) => theme.color.lightText};
      font-weight: 700;
      margin-bottom: ${p => (p.sm ? "0" : "1rem")};
      margin-right: ${p => (p.sm ? "1.5rem" : "0")};

      ::first-letter {
        text-transform: uppercase;
      }
    }
  }
`

const ArticleLink = ({ date, title, url, sm }) => {
  return (
    <Wrapper sm={sm}>
      <Link to={url}>
        <div>
          <time>{date}</time>
          <h3>{title}</h3>
        </div>
        {!sm && <FontAwesomeIcon icon={faAngleRight} />}
      </Link>
    </Wrapper>
  )
}

export default ArticleLink
