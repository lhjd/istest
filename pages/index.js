import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>iStox Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="p-5 flex items-center justify-between">
        <div className="flex">
          <img src="/images/logo.png" alt="logo" className="mr-2 h-12 w-12"/>
          <h1 className="mr-2 text-3xl font-bold uppercase">Power</h1>
        </div>
        <div>
          <Link href="/"><a className="mx-4 pb-2 border-b-2 border-red-600">Home</a></Link>
          <Link href="/"><a className="mx-4">About Us</a></Link>
          <Link href="/"><a className="mx-4">Our Classes</a></Link>
          <Link href="/"><a className="mx-4">Our Trainers</a></Link>
          <Link href="/"><a className="mx-4">Our Pricing</a></Link>
          <Link href="/"><a className="mx-4 px-6 py-2 bg-red-600 text-white rounded">Contact Us</a></Link>
        </div>
      </nav>
    </Layout>
  )
}
