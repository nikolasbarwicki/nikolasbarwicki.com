import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import GithubIcon from "../assets/icons/github-icon.svg"
import DribbbleIcon from "../assets/icons/dribbble-icon.svg"
import LinkedInIcon from "../assets/icons/linkedin-icon.svg"
import PersonalLogo from "../assets/icons/personal-logo.svg"

const StyledLogo = styled(PersonalLogo)`
  width: 40px;
`

const StyledLink = styled(Link)`
  width: 165px;
`

const Wrapper = styled.header`
  max-width: 1172px;
  margin: 0 auto;
  margin-top: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  nav {
  }

  ul {
    display: flex;
    gap: 40px;
  }

  li {
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 300ms ease;
    padding: 10px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.primary};
      transition: color 200ms ease;

      :hover {
        color: ${({ theme }) => theme.color.lightBlue};
        transition: color 200ms ease;
      }
    }
  }

  div {
    a {
      margin-left: 15px;

      svg {
        transition: all 300ms ease;
        padding: 10px;

        :hover {
          transform: translateY(-5px);
        }
      }
    }
  }
`

const Header = () => (
  <Wrapper>
    <StyledLink to="/">
      <StyledLogo />
    </StyledLink>
    <nav>
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
    </nav>
    <div>
      <a href="https://github.com/nikolasbarwicki" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/nikolas-barwicki/" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://dribbble.com/barwicki" target="_blank">
        <DribbbleIcon />
      </a>
    </div>
  </Wrapper>
)

export default Header
