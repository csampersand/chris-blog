import Head from 'next/head'
import Link from 'next/link'

export default function SeizeTheMarket() {
  return (
    <div className="max-w-xs px-4 my-24 mx-auto mb-24">
      <Head>
        <title>Seize the Market</title>
      </Head>
      <h1 className="mt-8 text-6xl leading-7 font-black tracking-tighter my-4">
        Seize <br />
        <br />
        the <br />
        <br />
        Market
      </h1>
      <div className="flex flex-col mt-10 leading-7 text-2xl">
        <p>
          Seize the Market is a CRM specializing in real estate lead generation
          and referral management for agents and brokers.
        </p>
        <p className="mt-4">
          I built several full-stack features and wrote documentation.
        </p>

        <p className="mt-4 font-bold">PHP, MySQL, Apache, CSS, Vagrant. </p>
        <Link href="/about">
          <a className="mt-12 text-xl text-blue-500 hover:underline">
            ← Back to home
          </a>
        </Link>
      </div>
    </div>
  )
}
