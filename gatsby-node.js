exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      posts: allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      categories: allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `)

  data.posts.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/postTemplate.js`),
      context: { slug: slug },
    })
  })

  data.categories.group.forEach(group => {
    const category = group.fieldValue
    actions.createPage({
      path: `/blog/category/${category}`,
      component: require.resolve(`./src/templates/categoryTemplate.js`),
      context: { category: category },
    })
  })
}
