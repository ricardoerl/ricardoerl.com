import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ lang = 'en', title, description, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `,
  );

  const metaTitle = title || site.siteMetadata.description;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage =
    image || `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:image:width',
          content: 200,
        },
        {
          property: 'og:image:height',
          content: 200,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
      ]}
    />
  );
}

export default SEO;
