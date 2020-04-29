import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar-thumbnail.png" }) {
        childImageSharp {
          fixed(width: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      title="Ricardo Ramírez"
      alt="Avatar de Ricardo Ramírez"
      className="rounded-full"
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  );
};

export default Avatar;
