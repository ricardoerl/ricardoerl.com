import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <h1>Tags</h1>
    <ul>
      {group.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/">Go back home</Link>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
