import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Headless UI Playgound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="my-5 text-gray-100 text-2xl font-semibold md:text-3xl text-center">
          This is a play ground site for <a href="https://headlessui.dev/" >Headless UI </a>
        </h1>
          <Nav/>
      </main>
      
    </div>
  )
}