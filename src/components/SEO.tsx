import React from "react"
import { Helmet } from "react-helmet"

interface SEOProps {
  title: string
  description?: string
  slug: string
}

export const SEO: React.FC<SEOProps> = ({ title, description, slug }) => {
  const url = `https://reppenhagen.space${slug}`
  const twitterUsername = "marcelreppi"
  return (
    <Helmet
      title={title}
      titleTemplate="%s | Marcel Reppenhagen"
      defaultTitle="Marcel Reppenhagen"
    >
      <html lang="en" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <link rel="canonical" href={url} />
      {description && <meta name="description" content={description} />}

      {/* OpenGraph */}
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  )
}
