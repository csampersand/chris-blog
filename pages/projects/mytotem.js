import Head from 'next/head'
import Link from 'next/link'

export default function MyTotem() {
  return (
    <div className="max-w-xs sm:max-w-sm px-4 my-24 mx-auto mb-24">
      <Head>
        <title>MyTotem</title>
      </Head>

      <h1 className="mt-8 text-6xl leading-10 font-black tracking-tighter my-4">
        MyTotem
      </h1>
      <div className="flex flex-col mt-10 leading-7 text-2xl">
        <p>MyTotem uses AI to generate logos and marketing content.</p>
        <p className="mt-4">
          I completely rewrote the previous web application and developed
          artificial intelligence to automate the design of branding and
          marketing material.
        </p>
        <p className="mt-4">
          Features included subscription payments, user accounts, and serverless
          deployment.{' '}
        </p>

        <p className="mt-4 font-bold">
          Vue 3, React, Next.js, Laravel, Stripe, Vercel Serverless, Amazon
          Sagemaker
        </p>
        <Link href="/about">
          <a className="mt-12 text-xl text-blue-500 hover:underline">
            ← Back to home
          </a>
        </Link>
      </div>
    </div>
  )
}
