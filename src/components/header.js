import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
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
      <a href="#">github</a>
      <a href="#">dribble</a>
      <a href="#">linkedin</a>
    </div>
  </header>
)

export default Header
