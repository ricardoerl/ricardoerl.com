import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

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
        frontmatter: { date, title, tags = [], excerpt: extract },
        excerpt,
      },
    }) => {
      return (
        <article key={id}>
          <span className="text-xs mr-1 uppercase">{date}</span>
          {tags.map((tag, index) => (
            <Link
              key={index}
              className="text-primary text-xs mx-1 uppercase"
              to={`/tags/${kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
          <Link to={slug}>
            <h1 className="text-2xl font-medium">{title}</h1>
          </Link>
          <p className="my-3">{extract || excerpt}</p>
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
