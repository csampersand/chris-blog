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
          dating, and spirituality that is available to{' '}
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
          {allPostsData.map(({ id, date, tags, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="text-blue-500 hover:underline">{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
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
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
