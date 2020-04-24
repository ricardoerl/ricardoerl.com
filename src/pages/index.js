import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/seo';
import IndexLayout from '../components/indexLayout';

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
        frontmatter: { title },
      },
    }) => (
      <Link key={id} to={slug}>
        {title}
      </Link>
    ),
  );

  return (
    <IndexLayout>
      <SEO title="Home" />
      <p>{posts}</p>
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
          }
        }
      }
    }
  }
`;
