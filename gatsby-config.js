module.exports = {
  siteMetadata: {
    title: 'The Books of Vicky',
    description: 'A personal blog about food, lifestyle and travel',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'images',
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '4391678613',
      },
    },
  ],
};
