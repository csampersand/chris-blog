import Link from 'next/link'

export default function Links() {
  const name = 'Chris Anderson'
  return (
    <div className="max-w-3xl px-4 mt-12 mx-auto mb-24">
      <div className="flex flex-col">
        <Link href="/about">
          <a>
            <img
              src="/images/logo.png"
              className="h-48 w-48 rounded-full"
              alt={name}
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col my-4 mx-6">
          <a className="text-3xl font-bold mb-1 transition ease-in-out duration-200 hover:text-blue-500">
            Projects
          </a>
          <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
            GARD
          </a>
          <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
            MyTotem
          </a>
          <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
            OneTrust
          </a>
          <a className="text-2xl transition ease-in-out duration-200 hover:text-blue-500">
            Seize The Market
          </a>
          <a className="text-2xl mb-1 transition ease-in-out duration-200 hover:text-blue-500">
            HylasFit
          </a>
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
        </div>
        <div className="flex-1 mx-8 px-4">
          <h1 className="text-5xl font-bold">Chris Anderson</h1>
          <div className="text-2xl text-medium leading-7">
            <p>I build rock-solid software using the latest tech.</p>
            <p className="mt-4">Full-stack. Web and mobile.</p>
            <p className="mt-4">
              Other interests include weight-lifting, biohacking, long-term
              travel, minimalism, deep dub, and psychedelics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
