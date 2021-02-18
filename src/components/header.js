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
    }

    :hover {
      color: #34a1cd;
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
      <a href="#">
        <GithubIcon />
      </a>
      <a href="#">
        <DribbbleIcon />
      </a>
      <a href="#">
        <LinkedInIcon />
      </a>
    </div>
  </Wrapper>
)

export default Header
