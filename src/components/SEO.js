import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Favicon from '../assets/images/facivon.png'

const SEO = ({ children, title, description, image, location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="pt-BR" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href={Favicon} />
      <link rel="alternate icon" href={Favicon} />
      <meta name="description" content={site.siteMetadata.description} />
      <title>{title}</title>

      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta propery="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
      <meta property="og:image" content={image || '/banner-f93cbbf0041e1786207209d6246b7e59.png'} />
      {location && <meta property="og:url" content={location.href} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={site.siteMetadata.description} />
      <meta name="twitter:site_name" content={site.siteMetadata.title} />
      <meta name="twitter:image" content={image || '/logo.svg'} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />

      {children}
    </Helmet>
  )
}

export default SEO
