import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import ReadLink from '../components/ReadLink';

const post = () => {
  return (
    <Layout>
      <h1>Post title</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by (author)
      </p>
      <p>post body here</p>
      <ReadLink to="/">&larr; Back to all posts</ReadLink>
    </Layout>
  );
};

export default post;
