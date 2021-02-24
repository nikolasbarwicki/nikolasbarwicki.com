exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/postTemplate.js`),
      context: { slug: slug },
    })
  })
}
