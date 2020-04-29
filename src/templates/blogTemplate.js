import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import BlogHeader from '../components/blogHeader';
import BlogLayout from '../components/blogLayout';

export default ({ data }) => {
  const { frontmatter, excerpt, html } = data.markdownRemark;
  const { tags, title, date, excerpt: extract } = frontmatter;

  return (
    <BlogLayout>
      <BlogHeader
        title={title}
        date={date}
        tags={tags}
        extract={extract || excerpt}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
      excerpt(pruneLength: 250)
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`;
