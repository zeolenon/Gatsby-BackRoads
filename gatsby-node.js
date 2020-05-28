const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      toursSlugs: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.toursSlugs.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/TourTemplate/index.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
