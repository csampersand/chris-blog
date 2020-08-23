import Link from 'next/link'
import Links from '../components/links'

export default function About() {
  const name = 'Chris Anderson'
  return (
    <div className="flex flex-col max-w-3xl px-4 mt-12 mx-auto mb-24">
      <div className="flex flex-col items-center sm:items-start">
        <img
          src="/images/logo.png"
          className="h-48 w-48 rounded-full"
          alt={name}
        />
      </div>
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col my-12 sm:my-4 mx-20 sm:mx-6 text-left">
          <Links />
        </div>
        <div className="flex-1 mx-0 sm:mx-8 px-4">
          <h1 className="mt-5 text-5xl font-bold leading-10 text-center sm:text-left">
            {name}
          </h1>
          <div className="mt-5 text-2xl text-medium leading-7">
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
