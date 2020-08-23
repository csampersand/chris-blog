import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/link'

import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          {postData.tags && (
            <ul className="list-none p-0">
              {postData.tags.map((tag) => (
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
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <style jsx global>
          {`
            p {
              margin-top: 1em;
              margin-bottom: 1em;
            }
            ul {
              list-style-type: disc;
              margin-top: 1em;
              margin-bottom: 1 em;
              padding-left: 40px;
            }
          `}
        </style>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
