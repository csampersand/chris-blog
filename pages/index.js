import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl leading-6">
        <p>
          <strong>Hey, I'm Chris.</strong> Welcome to my blog.
        </p>
        <p>
          This is where I keep my more polished ideas that I think are worth
          sharing.
        </p>
        <p>
          I also publish a monthly newsletter about biohacking, startups,
          dating, and mindfulness that is available to{' '}
          <Link href="/subscribe">
            <a className="text-blue-500 hover:underline"> subscribers</a>
          </Link>
          .
        </p>
        <style jsx>
          {`
            p {
              margin-top: 1em;
              margin-bottom: 1em;
            }
          `}
        </style>
      </section>
      <section className="text-xl leading-6 pt-1">
        <h2 className="font-bold text-2xl leading-6 my-4">All Posts</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ slug, title, metadata }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                <a className="text-blue-500 hover:underline">{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={metadata.date} />
              </small>
              <br />
              {metadata.tags && (
                <ul className="list-none">
                  {metadata.tags.map((tag) => (
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
    </Layout>
  )
}

export async function getServerSideProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
