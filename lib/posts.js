import remark from 'remark'
import html from 'remark-html'

import Cosmic from 'cosmicjs'

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
})

export async function getSortedPostsDataByTag(tag) {
  const { objects } = await bucket.getObjects({
    type: 'posts',
    metadata: {
      tags: tag,
    },
    props: 'title,slug,metadata.tags,metadata.date',
  })

  // Sort posts by date
  return objects.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getSortedPostsData() {
  const { objects } = await bucket.getObjects({
    type: 'posts',
    props: 'title,slug,metadata.tags,metadata.date',
  })

  // Sort posts by date
  return objects.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllPostSlugs() {
  const data = await bucket.getObjects({
    type: 'posts',
    props: 'slug',
  })

  return data.objects.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })
}

export async function getTagIds() {
  const { objects } = await bucket.getObjects({
    type: 'posts',
    props: 'metadata.tags',
  })
  const tags = objects
    .map((post) => {
      return post.metadata.tags
    })
    .flat(2)

  return tags.map((tag) => {
    return {
      params: {
        tag,
      },
    }
  })
}

export async function getPostData(slug) {
  const { object } = await bucket.getObject({
    slug,
    props: 'slug,title,metadata',
  })

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(object.metadata.body)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    ...object,
    contentHtml,
  }
}
