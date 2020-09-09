import Head from 'next/head'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Story from '../components/story'
import Classes from '../components/classes'
import Trainers from '../components/trainers'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>frontend test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Story />
      <Classes />
      <Trainers/>
    </Layout>
  )
}
