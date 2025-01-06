import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { description } = this.props.data.site.siteMetadata
    const summarySlug = "/summary/"

    return (
      <Layout>
        <Seo title="Все статьи" />
	<h1 style={{ textAlign: `center` }}><Link style={{ boxShadow: `none` }} to={summarySlug}>HardAndHeavy</Link></h1>
        <p>{description} <Link to={summarySlug}>Узнать обо мне больше можно здесь.</Link></p>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3 style={{ marginBottom: 0 }}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small className="secondColor">{node.frontmatter.date}</small>
              <p style={{ marginTop: rhythm(1 / 4), marginBottom: rhythm(1 / 4) }}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </Link>
              </p>
              <h5 style={{ marginTop: rhythm(1 / 2) }}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  Читать далее...
                </Link>
              </h5>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "ru")
            title
            description
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
