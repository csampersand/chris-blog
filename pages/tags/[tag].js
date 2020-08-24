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
          {postsData.map(({ title, slug, metadata }) => (
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

export async function getServerSideProps({ params }) {
  const postsData = await getSortedPostsDataByTag(params.tag)
  return {
    props: {
      postsData,
      tag: params.tag,
    },
  }
}
