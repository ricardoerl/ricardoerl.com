import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const BlogHeader = (props) => {
  const { date = '', title = '', tags = [], extract = '', path = '' } = props;
  const heading = <h1 className="text-2xl font-medium">{title}</h1>;
  return (
    <>
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
      {path ? <Link to={path}>{heading}</Link> : heading}
      {extract && <p className="my-2">{extract}</p>}
    </>
  );
};

export default BlogHeader;
