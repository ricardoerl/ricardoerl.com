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
        frontmatter: { date, title, tags = [], path },
      },
    }) => {
      return (
        <article key={id}>
          <BlogHeader title={title} date={date} path={path} />
        </article>
      );
    },
  );

  return (
    <IndexLayout>
      <SEO title="Blog" />
      <div className="max-w-xl">
        <h2 className="mb-4">Blog</h2>
        {posts}
      </div>
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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }
`;
