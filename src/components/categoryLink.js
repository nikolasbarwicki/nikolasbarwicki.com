import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const Wrapper = styled(Link)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  height: 169px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.category};
  transition: all 300ms ease;
  border: 2px solid ${({ theme }) => theme.color.white};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};

  span {
    font-family: Karla, sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0 25px;
    text-transform: capitalize;
  }

  :hover {
    border: 2px solid ${({ theme }) => theme.color.borderActive};
  }
`

const CategoryLink = ({ image, text, url }) => {
  return (
    <Wrapper to={url}>
      <Img fixed={image} />
      <span>{text}</span>
    </Wrapper>
  )
}

export default CategoryLink
