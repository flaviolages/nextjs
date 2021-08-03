import { useState } from "react";
import CartPerson from "../CartPerson";
import SideBarCart from "../SideBarCart";
import SideBarNav from "../SideBarNav";
import NavMenu from "../NavMenu";
import MainContent from "../MainContent";

import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp} from 'react-icons/ai'


function Layout({produtos, cart, addCart, dellItemCart}){

    const [showCart, setShowCart] = useState(false);

    function clickShowCart() {
        setShowCart(!showCart);
    };


    const [showNav, setShowNav] = useState(false);

    function clickShowNav() {
        setShowNav(!showNav);
    };

    const totalCart = cart.reduce((acc, current) => acc + current.preco, 0)
        let linkWtss = 'https://wa.me/555499298699?text=Ola,%20Meu%20Pedido:%0a'
        let ac = '';
        cart.map(a => (ac += '1: '+a.titulo+'%0a'))
        let str = ac.replace(/\s/g, '%20');
        let linkWts = linkWtss + str + '%0aTotal%20:%20' + totalCart
        let qntCart = cart.length
        console.log(qntCart)

    return(
        <div>
            
            <div className="NavBar">
                <div className="mx-auto max-w-8xl px-6">
                    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
                        
                        <div className="flex items-center flex-1">
                            
                            <div className="lg:hidden">
                            <NavMenu  clickShowNav={clickShowNav}/>
                            </div>

                            <nav className="hidden ml-6 space-x-4 lg:block">
                           
                                <a className="cursor-pointer inline-flex items-center text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">All</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">About</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Contact</a>
                            </nav>
                        </div>
                        
                        <div className="justify-center flex-1 flex">
                            <img className="h-8" src="https://res.cloudinary.com/djhntsyxr/image/upload/v1619116001/jetcompanybr/jetcompany-logomarca_ifpspo.png"></img>
                        </div>

                        <div className="flex justify-end flex-1 space-x-8">
                        <CartPerson clickShowCart={clickShowCart} cart={cart} qntCart={qntCart} />
                        </div>

                    </div>
                </div>
            </div>

            <main className="MainContent bg-write">
                <MainContent produtos={produtos} addCart={addCart}/>
            </main>
            
        
            <footer>
                <div className="mx-auto max-w-8xl px-6">
                    
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-2 py-12 text-primary bg-primary transition-colors duration-150">
                        
                        <div className="col-span-1 lg:col-span-2">
                           <a className="flex flex-initial items-center font-bold md:mr-24">
                               <button >
                               <img className="h-8" src="https://res.cloudinary.com/djhntsyxr/image/upload/v1619115322/jetcompanybr/favicon-jetcompanybr_wnwgvy.png"></img>
                               </button>
                           </a>
                        </div>
                    <div className="col-span-1 lg:col-span-2">
                        <ul className="flex flex-initial flex-col md:flex-1">
                    
        
                            <li className="py-3 md:py-0 md:pb-4">Home</li>
                            <li className="py-3 md:py-0 md:pb-4">All</li>
                            <li className="py-3 md:py-0 md:pb-4">About</li>
                            <li className="py-3 md:py-0 md:pb-4">Contact</li>
                          
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <ul className="flex flex-initial flex-col md:flex-1">
                            <li className="py-3 md:py-0 md:pb-4">Terms of use</li>
                            <li className="py-3 md:py-0 md:pb-4">Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-primary">
                        <div className="flex space-x-6 items-center h-10">
                            <button className="text-2xl">
                                <AiOutlineInstagram />
                            </button>

                            <button className="text-2xl">
                                <AiOutlineFacebook />
                            </button>
                            
                            <button className="text-2xl">
                                <AiOutlineWhatsApp />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4">
                    <div>
                        <span>© 2020 Jet Company, Inc. All rights reserved.</span>
                    </div>
                </div>



                </div>
            </footer>


            <SideBarCart
                showCart={showCart}
                clickShowCart={clickShowCart}
                cart={cart}
                dellItemCart={dellItemCart}
                totalCart={totalCart}
                linkWts={linkWts}
            />

            <SideBarNav clickShowNav={clickShowNav} showNav={showNav}/>

        </div>

    );
};

export default Layout;