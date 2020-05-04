import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql } from 'gatsby';
import IndexLayout from '../components/indexLayout';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <IndexLayout>
    <h2 className="mb-4">Tags</h2>
    <ul>
      {group.map((tag) => (
        <li key={tag.fieldValue} className="mb-2">
          <Link
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
            className="text-primary no-underline"
          >
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </IndexLayout>
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
