import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import IndexLayout from '../components/indexLayout';
import BlogHeader from '../components/blogHeader';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.map(
    ({
      node: {
        id,
        fields: { slug },
        frontmatter: { date, title, tags = [], excerpt: extract },
        excerpt,
      },
    }) => {
      return (
        <article key={id}>
          <BlogHeader
            title={title}
            date={date}
            tags={tags}
            extract={extract || excerpt}
            slug={slug}
          />
        </article>
      );
    },
  );

  return (
    <IndexLayout>
      <SEO title="Home" />
      {posts}
    </IndexLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
            excerpt
          }
        }
      }
    }
  }
`;
