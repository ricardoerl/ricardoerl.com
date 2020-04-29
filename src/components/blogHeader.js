import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const BlogHeader = (props) => {
  const { date = '', title = '', tags = [], slug = '', extract = '' } = props;
  const heading = <h1 className="text-2xl font-medium">{title}</h1>;
  return (
    <header>
      <span className="text-xs mr-1 uppercase">{date}</span>
      {tags.map((tag, index) => (
        <Link
          key={index}
          className="text-primary text-xs mx-1 uppercase"
          to={`/tags/${kebabCase(tag)}`}
        >
          {tag}
        </Link>
      ))}
      {slug ? <Link to={slug}>{heading}</Link> : heading}
      <p className="my-3 text-lg">{extract}</p>
    </header>
  );
};

export default BlogHeader;
