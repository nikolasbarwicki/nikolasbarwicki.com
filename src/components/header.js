import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import GithubIcon from "../assets/icons/github-icon.svg"
import DribbbleIcon from "../assets/icons/dribbble-icon.svg"
import LinkedInIcon from "../assets/icons/linkedin-icon.svg"
import PersonalLogo from "../assets/icons/personal-logo.svg"

const StyledLogo = styled(PersonalLogo)`
  width: 4rem;
`

const NavLeft = styled(Link)`
  width: 16.5rem;
`

const Wrapper = styled.header`
  position: absolute;
  z-index: 9999;
  max-width: 117.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2rem;
  background-color: ${p => (p.mobileNav ? p.theme.color.paleBlue : "#fff")};
  transition: all 200ms ease;

  @media screen and (max-width: 600px) {
  }

  nav {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  ul {
    display: flex;
    gap: 4rem;
  }

  li {
    font-weight: 700;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 300ms ease;
    padding: 1rem;

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
`

const NavCenter = styled.nav``

const NavRight = styled.div`
  a {
    margin-left: 1.5rem;

    @media screen and (max-width: 600px) {
      display: none;
    }

    svg {
      transition: all 300ms ease;
      padding: 1rem;

      :hover {
        transform: translateY(-0.5rem);
      }
    }
  }

  button {
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
    }
  }
`

const MobileNav = styled.nav`
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: ${p => p.theme.color.paleBlue};
  color: ${p => p.theme.color.primary};
  padding: 0 3rem;
  font-size: 2rem;
  font-weight: 700;
  display: none;
  transition: all 300ms ease;
  transform: ${({ mobileNav }) =>
    mobileNav ? "translateX(0)" : "translateY(calc(-100% - 9rem))"};

  @media screen and (max-width: 600px) {
    display: block;
  }

  li {
    padding: 3.5rem 0;
  }
`

const Button = styled.button`
  border: none;
  background: none;
  width: 5rem;
  height: 5rem;
  outline: none;
  z-index: 999;

  ::before {
    content: "";
    width: ${({ mobileNav }) => (mobileNav ? "30px" : "25px")};
    height: 3px;
    border-radius: 1px;
    display: block;
    background-color: ${p => p.theme.color.primary};
    transition: all 100ms ease;
    transform: ${({ mobileNav }) =>
      mobileNav
        ? "rotate(45deg) translateY(0px) translateX(2px)"
        : "rotate(0) translateY(-4px) translateX(3px)"};
  }

  ::after {
    content: "";
    width: ${({ mobileNav }) => (mobileNav ? "30px" : "25px")};
    height: 3px;
    border-radius: 1px;
    display: block;
    background-color: ${p => p.theme.color.primary};
    transition: all 100ms ease;
    transform: ${({ mobileNav }) =>
      mobileNav
        ? "rotate(-45deg) translateX(2px) translateY(0px)"
        : "rotate(0) translateY(4px) translateX(3px)"};
  }
`

const Header = () => {
  const [mobileNav, toggleMobileNav] = React.useState(false)

  return (
    <>
      <Wrapper mobileNav={mobileNav}>
        <NavLeft to="/">
          <StyledLogo />
        </NavLeft>
        <NavCenter>
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
        </NavCenter>
        <NavRight>
          <a
            href="https://github.com/nikolasbarwicki"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/nikolas-barwicki/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://dribbble.com/barwicki"
            target="_blank"
            rel="noreferrer"
          >
            <DribbbleIcon />
          </a>
          <Button
            onClick={() => toggleMobileNav(!mobileNav)}
            mobileNav={mobileNav}
          ></Button>
        </NavRight>
      </Wrapper>
      <MobileNav mobileNav={mobileNav}>
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
      </MobileNav>
    </>
  )
}

export default Header
