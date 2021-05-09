import Head from 'next/head'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <div className="bg-red-600">
      <Head>
        <title>Clean</title>
        <meta name="description" content="Clean" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout></Layout>

  </div>
  )
}
