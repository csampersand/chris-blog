import Link from 'next/link'

export default function GARD() {
  return (
    <div className="max-w-xs px-4 my-24 mx-auto mb-24">
      <h1 className="mt-8 text-6xl leading-10 font-black tracking-tighter my-4">
        HylasFit
      </h1>
      <div className="flex flex-col mt-10 leading-7 text-2xl">
        <p>In development. An AI-powered personal training app.</p>
        <p className="mt-4">
          Uses a chatbot interface and machine learning to provide smart
          training that adapts to the trainee's stats and workout history.
        </p>
        <p className="mt-4 font-bold">React Ionic, AWS Lambda, AWS Sagemaker</p>
        <Link href="/about">
          <a className="mt-12 text-xl text-blue-500 hover:underline">
            ← Back to home
          </a>
        </Link>
      </div>
    </div>
  )
}
