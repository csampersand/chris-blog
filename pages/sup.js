import Head from 'next/head'
import Link from 'next/link'
import Links from '../components/links'

export default function Linktree() {
  const name = 'Chris Anderson'
  return (
    <div className="max-w-xs px-4 mt-12 mx-auto mb-24">
      <Head>
        <title>Links</title>
      </Head>
      <div className="flex flex-col items-center">
        <Link href="/about">
          <a>
            <img
              src="/images/logo.png"
              className="h-48 w-48 rounded-full"
              alt={name}
            />
          </a>
        </Link>
        <h1 className="my-8 text-6xl leading-6 font-black tracking-tighter text-white">
          Links to
          <br />
          <br />
          my stuff
        </h1>
      </div>
      <div className="flex flex-col my-4 mx-6 text-white">
        <Links />
      </div>
    </div>
  )
}
