import React from "react"
import styled, { css } from "styled-components"

const Blockquote = styled.blockquote`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 35px;
  padding: 20px;
  background-color: #e9f9ff;
  border-left: 4px solid #58cfff;

  code {
    background-color: rgb(41, 44, 52);
    color: #fff;
    font-size: 1.6rem;
    font-family: monospace;
    border-radius: 0.5rem;
    padding: 4px 6px;
  }

  ${({ variant }) =>
    (variant === "yellow" &&
      css`
        background-color: #fef4e4;
        border-left: 4px solid #f7c261;
      `) ||
    (variant === "red" &&
      css`
        background-color: #fdf5f6;
        border-left: 4px solid #ef6465;
      `) ||
    (variant === "purple" &&
      css`
        background-color: #f4f3fe;
        border-left: 4px solid #6b5ffa;
      `)}
  p {
    margin: 0;
    line-height: 1.75;
  }
`

const Callout = ({ children, variant }) => {
  return <Blockquote variant={variant}>{children}</Blockquote>
}

export default Callout
