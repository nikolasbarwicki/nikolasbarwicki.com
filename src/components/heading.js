import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: ${p => (p.alignLeft ? "left" : "center")};

  h2 {
    font-size: 64px;
    margin-top: 10px;
    margin-bottom: 55px;
  }

  span {
    font-weight: 700;
    font-size: 20;
    color: ${({ theme }) => theme.color.lightText};
  }
`

const Heading = ({ main, secondary, alignLeft }) => {
  return (
    <Wrapper alignLeft={alignLeft}>
      <span>{secondary}</span>
      <h2>{main}</h2>
    </Wrapper>
  )
}

export default Heading
