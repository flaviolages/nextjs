import Head from 'next/head'
import Layout from '../components/Layout'


export default function Home({produtos}) {
  return (
    <div className="bg-color1 h-screen">
      <Head>
        <title>Menu</title>
        <meta name="description" content="Clean" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout produtos={produtos}/>

  </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://jetcompanybr.herokuapp.com/produtos');
  const data = await res.json();

  const resCategorias = await fetch('https://jetcompanybr.herokuapp.com/categorias');
  const dataCategorias = await resCategorias.json();
  
  return {
    props: {
      produtos: data,
      categorias: dataCategorias,
    },
    revalidate: 60
  }
};