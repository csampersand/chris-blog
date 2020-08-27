import React from 'react'
import Link from 'next/link'
import Date from './date'

export default function Posts({ posts, header }) {
  return (
    <section className="text-xl leading-6 pt-1">
      <h2 className="font-bold text-2xl leading-6 my-4">
        {header || 'All Posts'}
      </h2>
      <ul className="list-none p-0 m-0">
        {posts.map(({ slug, title, publishedOn, tags }) => (
          <li className="mb-5" key={slug}>
            <Link href="/posts/[slug]" as={`/posts/${slug}`}>
              <a className="text-blue-500 hover:underline">{title}</a>
            </Link>
            <br />
            <small className="text-gray-400">
              <Date dateString={publishedOn} />
            </small>
            <br />
            {tags && (
              <ul className="list-none">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="mr-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-500"
                  >
                    <Link href="/tags/[tag]" as={`/tags/${tag}`}>
                      <a className="hover:underline">{tag}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
