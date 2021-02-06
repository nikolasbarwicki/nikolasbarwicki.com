import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />

    <section>
      <h1>Cześć, tu Nikolas</h1>
      <span>Witaj na moim blogu</span>
      <form>
        <input type="email" placeholder="Adres email" />
        <input type="submit" />
      </form>
      <span>
        <span role="img" aria-label="Party popper emoji">
          🎉
        </span>
        Dołącz do newslettera i poznawaj na bieżąco świat frontendu!
      </span>
    </section>

    <section>
      <span>BLOG</span>
      <h2>Najnowsze artykuły</h2>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
    </section>

    <section>
      <h2>Kategorie</h2>
      <Link>
        <img alt="React icon"></img>
        <span>React</span>
      </Link>
      <Link>
        <img alt="React icon"></img>
        <span>React</span>
      </Link>
      <Link>
        <img alt="React icon"></img>
        <span>React</span>
      </Link>
    </section>

    <section>
      <span>BLOG</span>
      <h2>Popularne artykuły</h2>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
      <div>
        <article>
          <Link>
            <time>Styczeń 21, 2021</time>
            <h3>Tytuł artykułu</h3>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </article>
      </div>
    </section>

    <Footer />
  </Layout>
)

export default IndexPage
