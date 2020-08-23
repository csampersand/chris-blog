import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getTagIds, getSortedPostsDataByTag } from '../../lib/posts'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function PostList({ postsData, tag }) {
  return (
    <Layout>
      <Head>
        <title>{tag}</title>
      </Head>

      <section className="text-xl leading-6 pt-1">
        <h2 className="font-bold text-2xl leading-6 my-4">
          Posts tagged '{tag}'
        </h2>
        <ul className="list-none p-0 m-0">
          {postsData.map(({ id, date, tags, title }) => (
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

export async function getStaticPaths() {
  const paths = await getTagIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postsData = await getSortedPostsDataByTag(params.id)
  return {
    props: {
      postsData,
      tag: params.id,
    },
  }
}
