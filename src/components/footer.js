import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MailIcon from "../assets/icons/mail.svg"
import PersonalLogo from "../assets/icons/personal-logo.svg"

const StyledLogo = styled(PersonalLogo)`
  width: 40px;
`

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
    text-align: center;
  }

  ul {
    display: flex;
    gap: 35px;
    font-size: 14px;
    font-weight: 700;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`

const MailWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Navigation = styled.nav`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const MailText = styled.span`
  margin-left: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grayText};
  font-size: 28px;
  letter-spacing: -1px;
`
const ContactText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.grayText};
  font-size: 16px;
  letter-spacing: 1.5px;
`

const GotQuestion = styled.span`
  font-weight: 700;
  margin: 15px 0 40px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 38px;
`

const Footer = () => (
  <Wrapper>
    <Heading>
      <ContactText>KONTAKT</ContactText>
      <GotQuestion>Masz pytanie? Napisz!</GotQuestion>
      <MailWrapper>
        <MailIcon />
        <MailText>hello@nikolasbarwicki.com</MailText>
      </MailWrapper>
    </Heading>
    <Navigation>
      <Link to="/">
        <StyledLogo />
      </Link>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about-me">O mnie</Link>
        </li>
      </ul>
    </Navigation>
  </Wrapper>
)

export default Footer
