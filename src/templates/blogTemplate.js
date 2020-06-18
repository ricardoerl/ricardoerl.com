import React from 'react';
import { graphql } from 'gatsby';
import BlogHeader from '../components/blogHeader';
import IndexLayout from '../components/indexLayout';

export default ({ data }) => {
  const { frontmatter, html, fields } = data.markdownRemark;
  const { tags, title, date, path } = frontmatter;
  const { slug } = fields;

  return (
    <IndexLayout>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-start-3 sm:col-span-3">
          <BlogHeader title={title} date={date} tags={tags} />
          <div
            className="markdown mt-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
      </div>
    </IndexLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`;
