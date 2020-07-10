import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const about = () => {
  return (
    <Fragment>
      <h1>About me</h1>
      <p>This is my personal website</p>
      <Link to="/">&larr; Back to Home</Link>
    </Fragment>
  );
};

export default about;
