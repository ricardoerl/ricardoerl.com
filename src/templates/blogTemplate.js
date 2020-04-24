import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import BlogLayout from '../components/blogLayout';

export default ({ data }) => {
  const post = data.markdownRemark;
  const tags = post.frontmatter.tags;
  return (
    <BlogLayout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go back home</Link>
    </BlogLayout>
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
