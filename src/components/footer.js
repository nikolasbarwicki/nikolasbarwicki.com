import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  width: 1170px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-bottom: 70px;
  background-color: ${({ theme }) => theme.color.backgroundBlue};
  height: 390px;

  div {
    margin-top: 110px;
    text-align: center;

    .contact-text {
      font-weight: 700;
      color: ${({ theme }) => theme.color.grayText};
      font-size: 16px;
      letter-spacing: 1.5px;
    }

    .mail-text {
      font-weight: 700;
      color: ${({ theme }) => theme.color.grayText};
      font-size: 18px;
      letter-spacing: -1px;
    }

    h3 {
      margin: 15px 0 40px;
    }
  }

  ul {
    align-self: flex-end;
    margin: 40px 60px;
    display: flex;
    gap: 35px;
    font-size: 14px;
    font-weight: 700;
  }
`

const Footer = () => (
  <Wrapper>
    <div>
      <span className="contact-text">KONTAKT</span>
      <h3>Masz pytanie? Napisz!</h3>
      <span className="mail-text">hello@nikolasbarwicki.com</span>
    </div>
    <ul>
      <li>
        <Link>Kategorie</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Portfolio</Link>
      </li>
      <li>
        <Link>O mnie</Link>
      </li>
    </ul>
  </Wrapper>
)

export default Footer
