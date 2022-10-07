import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  description?: string;
  pageTitle: string;
}

const title = "Marcel Reppenhagen";
const url = "https://reppenhagen.space";
const defaultDescription = `
Hi, I'm Marcel
Software Developer @ SAP Innovation Center Potsdam
Information Systems Management
Master Graduate from Technical University of Berlin
`.trim();

const SEO: React.FC<SEOProps> = ({ description = defaultDescription, pageTitle }) => {
  const { pathname } = useRouter();
  const fullPageTitle = `${pageTitle} | ${title}`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Favicon - https://favicon.io/ */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <title>{fullPageTitle}</title>
      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={fullPageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={`${url}${pathname}`} />

      <meta property="og:image" content={`${url}/image.png`} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={title} />
    </Head>
  );
};

export default SEO;
