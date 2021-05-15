import Head from 'next/head'
import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Menu (Dropdown)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Link href="/">
          <a className="m-6 text-gray-100">
            Back
          </a>
        </Link>
        <h1 className="m-6 text-gray-100 text-2xl text-center">
          Menu (Dropdown)
        </h1>

      </main>

    </div>
  )
}