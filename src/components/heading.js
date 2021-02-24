import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: ${p => (p.alignLeft ? "left" : "center")};

  h2 {
    font-size: 6.4rem;
    margin-top: 1rem;
    margin-bottom: ${p => (p.noMargin ? 0 : "5.5rem")};
  }

  span {
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.lightText};
    text-transform: uppercase;
  }
`

const Heading = ({ main, secondary, alignLeft, noMargin }) => {
  return (
    <Wrapper alignLeft={alignLeft} noMargin={noMargin}>
      <span>{secondary}</span>
      <h2>{main}</h2>
    </Wrapper>
  )
}

export default Heading
