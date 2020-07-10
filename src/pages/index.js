import React, { Fragment } from 'react';
import { Link } from 'gatsby';

export default () => (
  <Fragment>
    <h1>Home</h1>
    <p>Hello Frontend Masters!</p>
    <Link to="/about">About</Link>
  </Fragment>
);
