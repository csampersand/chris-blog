import Link from 'next/link'

export default function GARD() {
  return (
    <div className="max-w-xs px-4 my-24 mx-auto mb-24">
      <h1 className="mt-8 text-6xl leading-10 font-black tracking-tighter my-4">
        MyTotem
      </h1>
      <div className="flex flex-col mt-10 leading-7 text-2xl">
        <p>
          I rewrote MyTotem and developed artificial intelligence to automate
          the design of branding and marketing material.
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