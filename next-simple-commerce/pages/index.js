import Head from 'next/head'
import { useState } from 'react';
import Layout from '../components/Layout'

export default function Home({produtos}) {

  const [cart, setCart] = useState([]);
  


  function addCart(titulo, foto, preco){
    const itensObj = {titulo, foto, preco }
    setCart([...cart, itensObj])
  }
  function dellItemCart(itemId){
    const filterCart = cart.filter(cartItem => cart.indexOf(cartItem) !== itemId )
    setCart(filterCart)
}

  
  return (
    <div>
      <Head>
        <title>Jet Company Br - Commerce </title>
        <meta name="description" content="Clean" />
        <link rel="icon" href="https://res.cloudinary.com/djhntsyxr/image/upload/v1619115322/jetcompanybr/favicon-jetcompanybr_wnwgvy.png" />
      </Head>

      <Layout 
        produtos={produtos} 
        cart={cart}
        addCart={addCart}
        dellItemCart={dellItemCart}
      />


  </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://sitesistema.herokuapp.com/jet-produtos');
  const data = await res.json();

  const resCategorias = await fetch('https://sitesistema.herokuapp.com/jet-categorias');
  const dataCategorias = await resCategorias.json();
  
  return {
    props: {
      produtos: data,
      categorias: dataCategorias,
    },
    revalidate: 60
  }
};