import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Chris Anderson'
export const siteTitle = 'Chris Anderson'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/logo.png"
              className="h-32 w-32 rounded-full"
              alt={name}
            />
            <h1 className="text-4xl leading-5 font-bold tracking-tighter my-4">
              {name}
            </h1>
            <section className="text-xl leading-6">
              <p>
                <strong>Hey, I'm Chris.</strong> Welcome to my blog.
              </p>
              <p>
                This is where I keep my more polished ideas that I think are
                worth sharing.
              </p>
              <p>
                I also publish a monthly newsletter about biohacking, startups,
                dating, and mindfulness that is available to{' '}
                <Link href="/subscribe">
                  <a className="text-blue-500 hover:underline"> subscribers</a>
                </Link>
                .
              </p>
              <style jsx>
                {`
                  p {
                    margin-top: 1em;
                    margin-bottom: 1em;
                  }
                `}
              </style>
            </section>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/logo.png"
                  className="h-24 w-23 rounded-full"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl leading-5 font-bold tracking-tighter my-4">
              <Link href="/">
                <a className="hover:underline">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className="text-blue-500 hover:underline">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
