import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

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
    <Layout>
      <p>{posts}</p>
    </Layout>
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
