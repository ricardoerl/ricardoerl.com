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
        frontmatter: { date, title, path, tags, excerpt },
      },
    }) => {
      return (
        <article key={id}>
          <BlogHeader
            title={title}
            date={date}
            tags={tags}
            path={path}
            extract={excerpt}
          />
        </article>
      );
    },
  );

  return (
    <IndexLayout>
      <SEO title="Blog" />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-start-2 sm:col-span-1">
          <h2 className="text-4xl mb-4">Blog</h2>
        </div>
        <div className="col-span-6 sm:col-span-3">{posts}</div>
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
            excerpt
          }
        }
      }
    }
  }
`;
