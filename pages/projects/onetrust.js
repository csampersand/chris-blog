import Link from 'next/link'

export default function OneTrust() {
  return (
    <div className="max-w-xs px-4 my-24 mx-auto mb-24">
      <h1 className="mt-8 text-6xl leading-10 font-black tracking-tighter my-4">
        OneTrust
      </h1>
      <div className="flex flex-col mt-10 leading-7 text-2xl">
        <p>
          I rapidly developed frontend features in close coordination with 6
          other scrum team members.{' '}
        </p>
        <p className="mt-4">
          Wrote unit tests and E2E tests, contributed to their extensive
          component library, and helped develop a microfrontend architecture.
        </p>

        <p className="mt-4 font-bold">
          Angular, Jasmine, Protractor, Material Design
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
