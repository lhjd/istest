import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>iStox Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-blue-500">
        hello world
      </div>
    </Layout>
  )
}
