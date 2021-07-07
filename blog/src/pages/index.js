import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />

      <h2 id="introduction">Welcome!</h2>
      <p>
        This DaySmart company portal is the central location for all information
        on how the company operates. Anyone who is apart of the company can edit
        a page on this site by making a{" "}
        <a
          href="https://github.com/DaySmart/company-portal"
          target="_blank"
          rel="noopener noreferrer"
        >
          branch
        </a>{" "}
        off the master repository, and submitting a{" "}
        <a
          href="https://github.com/DaySmart/company-portal/compare"
          target="_blank"
          rel="noopener noreferrer"
        >
          pull request
        </a>{" "}
        to add/improve the contents of this site. New pages should be made and
        edited as markdown files (.md). Add a page{" "}
        <a
          href="https://github.com/DaySmart/company-portal/new/master/src/markdown-pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
        {". "}
        See the site{" "}
        <a
          href="https://github.com/DaySmart/company-portal/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          README
        </a>{" "}
        for important information and guides on editing this site.
      </p>
      <br />

      <h2 id="company">
        <Link to={"/Company"}>Company</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/new-beginnings/new-beginnings-2"}>Applications</Link>
        </li>
        <li>
          <Link to={"/Company/Handbook"}>Handbook</Link>
        </li>
        <li>
          <Link to={"/Company/Workflows"}>Workflows</Link>
        </li>
        <li>
          <Link to={"/Company/Portal"}>Portal</Link>
        </li>
        <ul>
          <li>
            <Link to={"/Company/Portal#what-goes-in-the-portal"}>
              What Goes in the Portal
            </Link>
          </li>
          <li>
            <Link to={"/Company/Portal#tutorial-videos"}>Tutorial Videos</Link>
          </li>
        </ul>
      </ul>
      <br />

      <h2>
        <Link to={"/Departments/Billing"}>Billing</Link>
      </h2>
      <br />

      <h2>
        <Link to={"/Departments/Developers"}>Developers</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/Departments/Developers/Application-Standards"}>
            Application Standards and Tools
          </Link>
        </li>
        <li>
          <Link to={"/Departments/Developers/Developer-Onboarding"}>
            Developer Onboarding
          </Link>
        </li>
        <li>
          <Link to={"/Departments/Developers/Atlas"}>Atlas</Link>
        </li>
        <li>
          <Link to={"/Departments/Developers/Mobile"}>Mobile</Link>
        </li>
        <li>
          <Link to={"/Departments/Developers/123Petcare"}>123Petcare</Link>
        </li>
        <li>
          <Link to={"/Departments/Developers/Uber"}>Uber</Link>
        </li>
      </ul>
      <br />

      <h2>
        <Link to={"/Departments/Finance"}>Finance</Link>
      </h2>
      <br />

      <h2>
        <Link to={"/Departments/Human-Resources"}>Human Resources</Link>
      </h2>
      <br />

      <h2>
        <Link to={"/Departments/Infrastructure"}>Infrastructure</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/Departments/Infrastructure/Data"}>Data</Link>
        </li>
        <li>
          <Link to={"/Departments/Infrastructure/Integrations"}>
            Integrations
          </Link>
        </li>
        <li>
          <Link to={"/Departments/Infrastructure/IT"}>IT</Link>
        </li>
        <li>
          <Link to={"/Departments/Infrastructure/Platform"}>Platform</Link>
        </li>
      </ul>
      <br />

      <h2>
        <Link to={"/Departments/Marketing"}>Marketing</Link>
      </h2>
      <br />

      <h2>
        <Link to={"/Departments/QA"}>QA</Link>
      </h2>
      <br />

      <h2>
        <Link to={"/Departments/Sales"}>Sales</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/Departments/Sales/pet-battlecards"}>Pet-Battlecards</Link>
        </li>
        <li>
          <Link to={"/Departments/Sales/salon-battlecards"}>
            Salon-Battlecards
          </Link>
        </li>
      </ul>
      <br />
      <h2>
        <Link to={"/Departments/Support"}>Support</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/Departments/Support/Credit-Card-Processing-Articles"}>
            Credit Card Processing Articles
          </Link>
        </li>
        <li>
          <Link to={"/Departments/Support/Employee-Training-Articles"}>
            Employee Training Articles
          </Link>
        </li>
      </ul>
      <br />
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
