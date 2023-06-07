require("dotenv").config({ path: ".env" })
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWpPage {
          edges {
            node {
              template {
                templateName
              }
              slug
              databaseId
              uri
              id
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template.templateName === "Contact") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Default") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/defaultPage.js`),
          context: {
            id: node.id,
          },
        })
      }
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
