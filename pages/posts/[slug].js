import Head from 'next/head'
import Layout from '../../components/layout'
import Post from '../../components/post'
import Date from '../../components/date'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import Link from 'next/link'

import utilStyles from '../../styles/utils.module.css'

export default function PostLayout({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.metadata.date} />
          {postData.metadata.tags && (
            <ul className="list-none p-0">
              {postData.metadata.tags.map((tag) => (
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
        </div>
        <Post className="post" contentHtml={postData.contentHtml} />
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData,
    },
  }
}
