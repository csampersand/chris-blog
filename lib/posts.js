import remark from 'remark'
import html from 'remark-html'

import { GraphQLClient } from 'graphql-request'

const API_ENDPOINT = process.env.DATOCMS_ENDPOINT
const READ_KEY = process.env.DATOCMS_READ_KEY

const client = new GraphQLClient(API_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${READ_KEY}`,
  },
})

export async function getSortedPostsDataByTag(tag) {
  const query = `{
    allPosts(orderBy:[publishedOn_DESC]) {
      slug
      title
      publishedOn
      tags {
        name
      }
    }
  }`

  const { allPosts } = await client.request(query)

  return allPosts.filter((post) =>
    post.tags.map((tag) => tag.name).includes(tag)
  )
}

export async function getSortedPostsData() {
  const query = `{
    allPosts(orderBy:[publishedOn_DESC]) {
      slug
      title
      publishedOn
      tags {
        name
      }
    }
  }`

  const { allPosts } = await client.request(query)

  return allPosts
}

export async function getAllPostSlugs() {
  const query = `{
    allPosts {
      slug
    }
  }`

  const { allPosts } = await client.request(query)

  return allPosts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })
}

export async function getAllTagNames() {
  const query = `{
    allPosts {
      tags {
        name
      }
    }
  }`

  const { allPosts } = await client.request(query)

  const tags = allPosts.map((post) => post.tags).flat(2)

  return tags.map(({ name }) => {
    return {
      params: {
        tag: name,
      },
    }
  })
}

export async function getPostData(slug) {
  const query = `{
    post(filter: {slug: {eq: "${slug}"}}) {
      title
      publishedOn
      tags {
        name
      }
      body
    }
  }`

  const { post } = await client.request(query)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(post.body)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    ...post,
    contentHtml,
  }
}
