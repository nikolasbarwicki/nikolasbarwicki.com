import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.article`
  width: 100%;
  padding: ${p => (p.sm ? "17px 0" : "40px 0")};
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
    flex-direction: ${p => (p.sm ? "row" : "column")};
    align-items: ${p => (p.sm ? "center" : "flex-start")};

    time {
      font-size: 15px;
      min-width: 48px;
      color: ${({ theme }) => theme.color.lightText};
      font-weight: 700;
      margin-bottom: ${p => (p.sm ? "0" : "10px")};
      margin-right: ${p => (p.sm ? "15px" : "0")};
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
