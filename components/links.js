import Link from 'next/link'

export default function Links() {
  return (
    <>
      <a className="text-3xl font-bold mb-1 transition ease-in-out duration-200 hover:text-blue-500">
        Projects
      </a>
      <Link href="/projects/mytotem">
        <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
          MyTotem
        </a>
      </Link>
      <Link href="/projects/onetrust">
        <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
          OneTrust
        </a>
      </Link>
      <Link href="/projects/gard">
        <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
          GARD
        </a>
      </Link>
      <Link href="/projects/seize-the-market">
        <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
          Seize the Market
        </a>
      </Link>
      <Link href="/projects/hylasfit">
        <a className="text-2xl mb-1 transition ease-in-out duration-200 hover:text-blue-500">
          HylasFit
        </a>
      </Link>
      <a
        href="/Resume-04.20.20.pdf"
        className="text-3xl font-bold mb-1 transition ease-in-out duration-200 hover:text-blue-500"
      >
        Resume
      </a>
      <Link href="/">
        <a className="text-3xl font-bold mb-1 transition ease-in-out duration-200 hover:text-blue-500">
          Blog
        </a>
      </Link>
      <a
        href="https://instagram.com/chrisanderson.jpeg"
        className="text-3xl font-bold mb-1 transition ease-in-out duration-200 hover:text-blue-500"
      >
        Instagram
      </a>
    </>
  )
}
