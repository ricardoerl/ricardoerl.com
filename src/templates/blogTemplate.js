import React from 'react';
import { graphql } from 'gatsby';
import BlogHeader from '../components/blogHeader';
import IndexLayout from '../components/indexLayout';

export default ({ data }) => {
  const { frontmatter, excerpt, html } = data.markdownRemark;
  const { tags, title, date, excerpt: extract } = frontmatter;

  return (
    <IndexLayout>
      <div className="max-w-xl">
        <BlogHeader
          title={title}
          date={date}
          tags={tags}
          extract={extract || excerpt}
        />
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </IndexLayout>
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
