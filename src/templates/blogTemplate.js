import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/layout';

export default ({ data }) => {
  const post = data.markdownRemark;
  const tags = post.frontmatter.tags;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ul>
        {tags.map((tag) => (
          <li>
            <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go back home</Link>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`;
