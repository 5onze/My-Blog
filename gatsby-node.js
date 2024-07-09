/*



const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulPost {
        nodes {
          id
          title
          slug
          createdAt
          price
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error`);
    return;
  }

  const contentfulPosts = result.data.allContentfulPost.nodes;

  const postTemplate = path.resolve(`./src/templates/post-template.tsx`);

  contentfulPosts.forEach((node) =>
    createPage({
      path: `/produts/${node.slug}`,
      component: postTemplate,
      context: {
        product: node,
      },
    })
  );
};
*/
