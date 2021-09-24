const path = require("path");
exports.createPages = async function createPages({
  graphql,
  actions,
  reporter,
}) {
  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            id
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    for (const error of errors) {
      reporter.panic(error.message);
      console.log(error.message);
    }
  }
  for (const node of data.allMarkdownRemark.nodes) {
    actions.createPage({
      path: `/news/${node.frontmatter.id}`,
      component: path.resolve(`./src/template/news.js`),
      ownerNodeId: node.id,
      context: {
        id: node.id,
      },
      defer: node.frontmatter.id > 3,
      // The first 3 pages will receive defer: false, the other 3 pages receive defer: true.
      // The goal is to defer the generation of the last 3 pages until the user requests for them.
    });
  }
};
