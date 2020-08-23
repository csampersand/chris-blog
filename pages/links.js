import Link from 'next/link'

export default function Links() {
  const name = 'Chris Anderson'
  return (
    <div className="max-w-xs px-4 mt-12 mx-auto mb-24">
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
        <h1 className="mt-8 text-6xl leading-10 font-black tracking-tighter my-4">
          Links to
          <br />
          my stuff
        </h1>
      </div>
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
    </div>
  )
}
