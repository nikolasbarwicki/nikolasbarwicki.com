import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div>
      <span>Kontakt</span>
      <h3>Masz pytanie? Napisz!</h3>
      <span>hello@nikolasbarwicki.com</span>
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
  </footer>
)

export default Footer
