import React from 'react';

const Footer = () => {
  return (
    <footer className="my-4 text-center text-xs">
      <p className="text-opacity-25">
        &copy; 2020 &mdash; {new Date().getFullYear()} Ricardo Ramírez.
      </p>
    </footer>
  );
};

export default Footer;
