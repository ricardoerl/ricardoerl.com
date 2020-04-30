import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Avatar = ({ size = 'normal' }) => {
  const data = useStaticQuery(graphql`
    query {
      primaryImage: file(relativePath: { eq: "avatar-thumbnail.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      secondaryImage: file(relativePath: { eq: "avatar-thumbnail.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const path =
    size === 'small'
      ? data.secondaryImage.childImageSharp.fixed
      : data.primaryImage.childImageSharp.fixed;

  return (
    <Img
      title="Ricardo Ramírez"
      alt="Avatar de Ricardo Ramírez"
      className="rounded-full"
      fixed={path}
    />
  );
};

export default Avatar;
