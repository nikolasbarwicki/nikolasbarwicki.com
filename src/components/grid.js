import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 24px;
  width: 1176px;
  margin: 0 auto;
`

const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Grid
