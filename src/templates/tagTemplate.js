import React from 'react';
import { Link, graphql } from 'gatsby';
import IndexLayout from '../components/indexLayout';
import BlogHeader from '../components/blogHeader';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <IndexLayout>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-start-2 sm:col-span-1">
          <h2 className="text-4xl mb-4">{tag}</h2>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <ul>
            {edges.map(({ node }, index) => {
              const { title, date, path, excerpt } = node.frontmatter;
              return (
                <li key={index}>
                  <BlogHeader
                    title={title}
                    date={date}
                    path={path}
                    extract={excerpt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-6 sm:col-span-1">
          <Link to="/tags" className="text-primary">
            All tags
          </Link>
        </div>
      </div>
    </IndexLayout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            excerpt
          }
        }
      }
    }
  }
`;
