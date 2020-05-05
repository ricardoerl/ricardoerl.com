import React from 'react';
import { graphql } from 'gatsby';
import BlogHeader from '../components/blogHeader';
import IndexLayout from '../components/indexLayout';

export default ({ data }) => {
  const { frontmatter, excerpt, html, fields } = data.markdownRemark;
  const { tags, title, date, excerpt: extract, path } = frontmatter;
  const { slug } = fields;

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
        <p>
          <a
            href={`http://twitter.com/share?text=${title}&amp;url=https://ricardoerl.com${path}&via=ricardoerl`}
            className="underline text-primary"
          >
            Share on Twitter
          </a>{' '}
          &bull;{' '}
          <a
            href={`https://github.com/ricardoerl/ricardoerl.com/blob/master/src/posts/${slug.replace(
              /\//g,
              '',
            )}.md`}
            className="underline text-primary"
          >
            Edit on GitHub
          </a>
        </p>
      </div>
    </IndexLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 250)
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        excerpt
        path
      }
    }
  }
`;
