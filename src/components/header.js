import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaTelegram, FaRegEnvelope, FaGithub } from 'react-icons/fa'
import { SiHabr } from 'react-icons/si'
import { rhythm } from "../utils/typography"

const SocialLink = props => (
  <a
    className="socialLink"
    style={{
      marginRight: 10
    }}
    target="_blank"
    {...props}
  >
    {props.children}
  </a>
)

const Header = () =>
  <StaticQuery
    query={headerQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <div
          style={{
            display: `table`,
            marginBottom: rhythm(1),
            width: `100%`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              display: `table-cell`,
            }}
            to={`/`}>
            <div style={{ display: `table` }}>
              <StaticImage
	        className="profile-pic"
                src="../images/profile-pic.png"
                alt={author}
	        layout="fixed"
                formats={["auto", "webp", "avif"]}
                width={50}
                height={50}
                quality={95}  
              />
              <p
                style={{
                  paddingLeft: 10,
                  lineHeight: 1,
                  display: `table-cell`,
                  verticalAlign: `middle`,
                }}>{author}</p>
            </div>
          </Link>
          <div
            style={{
              display: `table-cell`,
              verticalAlign: `middle`,
              fontSize: 25,
              width: `60%`,
            }}
          >
            <div style={{ float: `right` }}>
              <SocialLink href={social.telegram}>
                <FaTelegram />
              </SocialLink>
              <SocialLink href={`mailto:${social.mail}`}>
                <FaRegEnvelope />
              </SocialLink>
              <SocialLink href={social.habr}>
                <SiHabr />
              </SocialLink>
              <SocialLink href={social.github}>
                <FaGithub />
              </SocialLink>
            </div>
          </div>
        </div>
      )
    }}
  />

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        author
        social {
          telegram
	  mail
	  habr
          github
        }
      }
    }
  }
`

export default Header
