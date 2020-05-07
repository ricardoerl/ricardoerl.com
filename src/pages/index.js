import React from 'react';
import { graphql } from 'gatsby';
import Avatar from '../components/avatar';

import SEO from '../components/seo';
import IndexLayout from '../components/indexLayout';
import BlogHeader from '../components/blogHeader';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.map(
    ({
      node: {
        id,
        frontmatter: { date, title, path },
      },
    }) => {
      return (
        <article key={id}>
          <BlogHeader title={title} date={date} path={path} />
        </article>
      );
    },
  );

  return (
    <IndexLayout>
      <SEO title="Ricardo Ramírez" />
      <section className="md:h-64 grid grid-cols-6 gap-4 mb-8">
        <div className="col-span-6 sm:col-span-2 flex items-center justify-center">
          <Avatar className="rounded-full" />
        </div>
        <div className="col-span-6 sm:col-start-3 sm:col-span-4 flex items-center sm:my-4 md:text-xl">
          <p>
            Hi, I'm Ricardo.{' '}
            <span role="img" aria-label="Wave">
              👋
            </span>
            <br /> I'm a Front End Developer at Applaudo Studios and{' '}
            <a
              href="https://www.horchatajs.com/"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              HorchataJS
            </a>{' '}
            organizer. <br /> I love building websites,{' '}
            <a href="https://www.instagram.com/ricardoerl/">hiking</a> and{' '}
            <a href="https://letterboxd.com/ricardoerl/">watching movies</a>.
          </p>
        </div>
      </section>
      <div class="grid grid-cols-6 gap-4 ">
        <div className="col-span-6 md:col-start-3 sm:col-span-3">
          <h2 className="mb-4">Blog</h2>
          {posts}
        </div>
        <div className="col-span-6 md:col-span-1">
          <h2 className="mb-4">Projects</h2>
          <ul>
            <li className="mb-2">
              <a
                className="text-primary no-underline"
                href="https://www.horchatajs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HorchataJS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </IndexLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }
`;
