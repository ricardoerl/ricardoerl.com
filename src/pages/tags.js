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
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 md:col-start-2 sm:col-span-1">
        <h2 className="text-4xl mb-4">Tags</h2>
      </div>
      <div className="col-span-6 sm:col-span-3">
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
      </div>
    </div>
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
