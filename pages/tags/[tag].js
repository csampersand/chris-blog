import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllTagNames, getSortedPostsDataByTag } from '../../lib/posts'
import Posts from '../../components/posts'

export default function PostList({ postsData, tag }) {
  return (
    <Layout>
      <Head>
        <title>{tag}</title>
      </Head>
      <Posts posts={postsData} header={`Posts tagged '${tag}'`} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllTagNames()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postsData = await getSortedPostsDataByTag(params.tag)
  return {
    props: {
      postsData,
      tag: params.tag,
    },
  }
}
