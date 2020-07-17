import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import usePosts from '../hooks/use-posts';
import Hero from '../components/Hero';
import Insta from '../components/Insta';

export default () => {
  const posts = usePosts();

  return (
    <Fragment>
      <Hero></Hero>
      <Layout>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </Fragment>
  );
};
