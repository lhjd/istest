import Head from 'next/head'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Story from '../components/story'
import Classes from '../components/classes'
import Trainers from '../components/trainers'
import Pricing from '../components/pricing'
import Feedback from '../components/feedback'

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
      <Pricing/>
      <Feedback/>
    </Layout>
  )
}
