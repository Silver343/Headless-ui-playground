import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Headless UI Playgound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 pt-3 h-full">
        <h1 className="mb-3 text-gray-100 text-2xl font-semibold md:text-3xl text-center">
          This is a play ground site for <a href="https://headlessui.dev/" >Headless UI </a>
        </h1>
          <Nav/>
      </main>
      
    </div>
  )
}