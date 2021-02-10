import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import GithubIcon from "../assets/icons/github-icon.svg"
import DribbbleIcon from "../assets/icons/dribbble-icon.svg"
import LinkedInIcon from "../assets/icons/linkedin-icon.svg"

const Wrapper = styled.header`
  max-width: 1172px;
  margin: 0 auto;
  margin-top: 51px;
  display: flex;
  justify-content: center;
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

    :hover {
      color: #34a1cd;
    }
  }

  div {
    position: absolute;
    right: 0;

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
    <nav>
      <ul>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Kategorie</Link>
        </li>
        <li>
          <Link>Portfolio</Link>
        </li>
        <li>
          <Link>O mnie</Link>
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
