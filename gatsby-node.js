const path = require("path");
// const slugify = require("@sindresorhus/slugify");

// exports.createSchemaCustomization = function createSchemaCustomization({
//   actions,
//   schema,
// }) {
//   const { createTypes } = actions;
//   const typeDefs = [
//     `
//     type Frontmatter @dontInfer {
//       title: String!
//       date: Date! @dateformat
//       description: String
//     }
//   `,
//     schema.buildObjectType({
//       name: "MarkdownRemark",
//       fields: {
//         frontmatter: "Frontmatter!",
//         slug: {
//           type: "String!",
//           resolve(parent) {
//             return slugify(parent.frontmatter.title);
//           },
//         },
//       },
//       interfaces: ["Node"],
//       extensions: {
//         infer: true,
//       },
//     }),
//   ];

//   createTypes(typeDefs);
// };

/**
 * Create DSG pages
 */
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
    console.log(node);
    actions.createPage({
      path: `/news/${node.frontmatter.id}`,
      component: path.resolve(`./src/template/news.js`),
      ownerNodeId: node.id,
      context: {
        id: node.id,
      },
      defer: node.frontmatter.id > 3,
      //The first 3 pages will receive defer: false, the other 3 pages receive defer: true.
    });
  }
};
