import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import React from "react"
import styled from "styled-components"

const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim()

const Pre = styled.pre`
  text-align: left;
  margin: 30px -50px;
  padding: 30px 40px;
  border-radius: 15px;
  font-family: monospace;
  font-size: 16px;
  font-weight: 700;
  overflow-x: scroll;
`

const Line = styled.div`
  display: table-row;
`

const LineContent = styled.span`
  display: table-cell;
  padding: 3px 0;
`

const WithLineNumbers = () => (
  <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
)

export default WithLineNumbers
