import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.article`
  height: 127px;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 43px;
  transition: box-shadow 200ms ease-in;
  cursor: pointer;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
    transition: box-shadow 200ms ease-in;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 37px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
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
`

const ArticleLink = ({ date, title, url }) => {
  return (
    <Wrapper>
      <Link to={url}>
        <div>
          <time>{date}</time>
          <h3>{title}</h3>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </Wrapper>
  )
}

export default ArticleLink
