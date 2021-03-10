import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MailIcon from "../assets/icons/mail.svg"
import PersonalLogo from "../assets/icons/personal-logo.svg"
import { device } from "../styles/breakpoint"

const StyledLogo = styled(PersonalLogo)`
  width: 4rem;
`

const Wrapper = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundBlue};
  height: 39rem;
  margin-bottom: 0;
  width: 100%;
  border-radius: 0;

  ${device.lg} {
    width: 117rem;
    border-radius: 2rem;
    margin-bottom: 7rem;
  }

  div {
    text-align: center;
  }

  ul {
    display: flex;
    gap: 3.5rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
`

const MailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const StyledMailIcon = styled(MailIcon)`
  width: 3rem;

  ${device.md} {
    width: 5rem;
  }
`

const Navigation = styled.nav`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  ${device.lg} {
    max-width: 117rem;
  }
`

const MailText = styled.span`
  margin-left: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grayText};
  font-size: 2.8rem;
  letter-spacing: -1px;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`
const ContactText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.grayText};
  font-size: 1.6rem;
  letter-spacing: 1.5px;
`

const GotQuestion = styled.span`
  font-weight: 700;
  margin: 1.5rem 0 4rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: 3.8rem;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`

const Footer = () => (
  <Wrapper>
    <Heading>
      <ContactText>KONTAKT</ContactText>
      <GotQuestion>Masz pytanie? Napisz!</GotQuestion>
      <MailWrapper>
        <StyledMailIcon />
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
