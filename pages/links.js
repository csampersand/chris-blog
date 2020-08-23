export default function Links() {
  const name = 'Chris Anderson'
  return (
    <div className="max-w-xs px-4 mt-12 mx-auto mb-24">
      <div className="flex flex-col items-center">
        <img
          src="/images/logo.png"
          className="h-32 w-32 rounded-full"
          alt={name}
        />
        <h1 className="text-6xl leading-10 font-black tracking-tighter my-4">
          Links to
          <br />
          my stuff
        </h1>
      </div>
      <div className="flex flex-col my-4 mx-6">
        <a className="text-3xl font-bold">Projects</a>
        <a className="text-2xl">GARD</a>
        <a className="text-2xl">MyTotem</a>
        <a className="text-2xl">OneTrust</a>
        <a className="text-2xl">Seize The Market</a>
        <a className="text-2xl">HylasFit</a>
        <a className="text-3xl font-bold">Resume</a>
        <a className="text-3xl font-bold">Blog</a>
        <a className="text-3xl font-bold">Instagram</a>
      </div>
    </div>
  )
}
