import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const about = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>This is my personal website</p>
      <Link to="/">&larr; Back to Home</Link>
    </Layout>
  );
};

export default about;
