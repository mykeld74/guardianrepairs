const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                title
                content
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPage.edges.forEach(({ node }) => {
        if (
          node.slug != 'home' &&
          node.slug != 'volunteer-opportunities' &&
          node.slug != 'missional-communities' &&
          node.slug != 'facility-rentals' &&
          node.slug != 'contact-us'
        ) {
          createPage({
            path: node.slug,
            component: path.resolve('./src/templates/page.js'),
            context: {
              slug: node.slug,
              name: node.title,
              content: node.content,
            },
          })
        }
      })

      resolve()
    })
  })
}
