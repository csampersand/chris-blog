import Head from 'next/head'
import Link from 'next/link'

export default function GARD() {
  return (
    <div className="max-w-xs sm:max-w-sm px-4 my-24 mx-auto mb-24">
      <Head>
        <title>GARD</title>
      </Head>
      <h1 className="mt-8 text-6xl leading-10 font-black tracking-tighter my-4">
        GARD
      </h1>
      <div className="flex flex-col mt-10 leading-7 text-2xl">
        <p>
          An end-to-end supply chain management solution built on blockchain and
          modern web technologies.
        </p>
        <p className="mt-4">
          I architected, designed, and developed GARD’s main web portal and
          mobile app.{' '}
        </p>
        <p className="mt-4">
          I used blockchain and smart contracts to establish whether products
          sold online are real or counterfeit.
        </p>
        <p className="mt-4 font-bold">Vue, React Native, Feathers.js, GCP</p>
        <Link href="/about">
          <a className="mt-12 text-xl text-blue-500 hover:underline">
            ← Back to home
          </a>
        </Link>
      </div>
    </div>
  )
}
