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
            </p><br />

            <h2 id="company"><Link to={"/Company"}>Company</Link></h2>
            <ul>
                <li><Link to={"/Company/Applications"}>Applications</Link></li>
                <ul>
                    <li><Link to={"/Company/Applications/application-list"}>Application List</Link></li>
                    <li><Link to={"/Company/Applications/application-routing-diagrams"}>Application Routing Diagrams</Link></li>
                </ul>

                <li><Link to={"/Company/Handbook"}>Handbook</Link></li>
                <ul>
                    <li><Link to={"/Company/Handbook/company-vision"}>Company Vision</Link></li>
                    <li><Link to={"/Company/Handbook/contact"}>Contact</Link></li>
                    <li><Link to={"/Company/Handbook/products"}>Products</Link></li>
                    <li><Link to={"/Company/Handbook/employment"}>Employment</Link></li>
                    <li><Link to={"/Company/Handbook/company-vision"}>Employment Status and Records</Link></li>
                    <li><Link to={"/Company/Handbook/time-off-policy"}>Time Off Policy</Link></li>
                    <li><Link to={"/Company/Handbook/timekeeping-and-payroll"}>Timekeeping and Payroll</Link></li>
                    <li><Link to={"/Company/Handbook/work-conditions-and-hours"}>Work Conditions and Hours</Link></li>
                    <li><Link to={"/Company/Handbook/employee-conduct-and-disciplinary-action"}>Employee Conduct/disciplinary Action</Link></li>
                    <li><Link to={"/Company/Handbook/employee-telecommuting-policy"}>Employee Telecommuting Policy</Link></li>
                    <li><Link to={"/Company/Handbook/legal"}>Legal</Link></li>
                </ul>

                <li><Link to={"/Company/Workflows"}>Workflows</Link></li>
                <ul>
                    <li><Link to={"/Company/Workflows"}>Production</Link></li>
                    <ul>
                        <li><a href = "https://docs.google.com/document/d/1HyKjjP1_HsG2QwKdD-PpRx80tpt-N8uV90gsgu7j9w8/edit?usp=sharing">Releasing DsiCollection Project Guide</a></li>
                        <li><a href = "https://docs.google.com/document/d/1yX2hnYvLgURa3P_ToqykFmEUY9axdiKMPYDaNfDtAGQ/edit?usp=sharing">Generating Release Notes</a></li>
                        <li><Link to={"/Company/Workflows/production-changes"}>Production Changes</Link></li>
                        <li><Link to={"/Company/Workflows/production-rollback-decision-making-process"}>Production Rollback Decision Making Process</Link></li>
                        <li><Link to={"/Company/Workflows/postmoterm-process"}>Postmortem Process</Link></li>
                    </ul>
                </ul>
                <ul>
                    <li><Link to={"/Company/Workflows"}>Service Interruption Protocols</Link></li>
                        <ul>
                            <li><Link to={"/Company/Workflows/service-interruption-protocol"}>Service Interruption Protocol</Link></li>
                            <li><Link to={"/Company/Workflows/123pet-care-service-interruption-protocol"}>123Pet Care Service Interruption Protocol</Link></li>
                        </ul>
                </ul>
                <ul>
                    <li><Link to={"/Company/Workflows/"}>Disaster Recovery</Link></li>
                        <ul>
                            <li><Link to={"/Company/Workflows/og-disaster-recovery-protocol"}>OG Application DR Protocol</Link></li>
                        </ul>
                </ul>

                <li><Link to={"/Company/Portal"}>Portal</Link></li>               
                <ul>
                    <li><Link to={"/Company/Portal#what-goes-in-the-portal"}>What Goes in the Portal</Link></li>
                    <li><Link to={"/Company/Portal#tutorial-videos"}>Tutorial Videos</Link></li>
                </ul>
            </ul><br />

            <h2><Link to={"/Departments/Billing"}>Billing</Link></h2><br />

            <h2><Link to={"/Departments/Developers"}>Developers</Link></h2>
            <ul>
                <li><Link to={"/Departments/Developers/Application-Standards"}>Application Standards and Tools</Link></li>
                <li><Link to={"/Departments/Developers/Developer-Onboarding"}>Developer Onboarding</Link></li>
                <li><Link to={"/Departments/Developers/Atlas"}>Atlas</Link></li>
                <li><Link to={"/Departments/Developers/Mobile"}>Mobile</Link></li>
                <li><Link to={"/Departments/Developers/123Petcare"}>123Petcare</Link></li>
                <li><Link to={"/Departments/Developers/Uber"}>Uber</Link></li>
            </ul><br />

            <h2><Link to={"/Departments/Finance"}>Finance</Link></h2><br />

            <h2><Link to={"/Departments/Human-Resources"}>Human Resources</Link></h2><br />

            <h2><Link to={"/Departments/Infrastructure"}>Infrastructure</Link></h2>
            <ul>
                <li><Link to={"/Departments/Infrastructure/Data"}>Data</Link></li>
                <li><Link to={"/Departments/Infrastructure/Integrations"}>Integrations</Link></li>
                <li><Link to={"/Departments/Infrastructure/IT"}>IT</Link></li>
                <li><Link to={"/Departments/Infrastructure/Platform"}>Platform</Link></li>
            </ul><br />

            <h2><Link to={"/Departments/Marketing"}>Marketing</Link></h2><br />

            <h2><Link to={"/Departments/QA"}>QA</Link></h2><br />

            <h2><Link to={"/Departments/Sales"}>Sales</Link></h2>
            <ul>
                <li><Link to={"/Departments/Sales/pet-battlecards"}>Pet-Battlecards</Link></li>
                    <ul>
                        <li><a href= "https://docs.google.com/document/d/1D-tUzvkC2-rPQH1S9Pa8c_T4RiHNYpTpLUY7wCvJyrs/edit?usp=sharing">Pawfinity</a></li>
                        <li><a href= "https://docs.google.com/document/d/1Xk_m5xxz22xQ8hNRPZk4hUtuAU_qUVs4q49AtRLknlI/edit?usp=sharing">Gingr</a></li>
                        <li><a href= "https://docs.google.com/document/d/1Xk_m5xxz22xQ8hNRPZk4hUtuAU_qUVs4q49AtRLknlI/edit?usp=sharing">PetExec</a></li>
                        <li><a href= "https://docs.google.com/document/d/16bEXAOXeDIJvHcLZpjUIQ2INeh3q9m7K9Gr21fr-poI/edit?usp=sharing">ProPet</a></li>
                        <li><a href= "https://docs.google.com/document/d/1Q8sfQ8WzLg6NLT-JVDpzrA5zxDiy5lC_EYtSGDBB7XI/edit?usp=sharing">PawLoyalty</a></li>
                    </ul>
                <li><Link to={"/Departments/Sales/salon-battlecards"}>Salon-Battlecards</Link></li>
            </ul><br />        
            <h2><Link to={"/Departments/Support"}>Support</Link></h2>
            <ul>
                <li><Link to={"/Departments/Support/Credit-Card-Processing-Articles"}>Credit Card Processing Articles</Link></li>
                <ul>
                    <li><Link to={"/Departments/Support/Credit-Card-Processing-Articles/VP3300-setup-use-guide"}>VP3300 Setup/Use Guide</Link></li>
                </ul>
                <li><Link to={"/Departments/Support/Employee-Training-Articles"}>Employee Training Articles</Link></li>
                    <ul>
                        <li><Link to={"/Departments/Support/Employee-Training-Articles/cloud-remote-access-and-mobile-devices"}>Cloud, Remote Acess, and Mobile Devices</Link></li>
                    </ul>
            </ul><br />
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
