import { useState } from "react";
import CartPerson from "../CartPerson";
import SideBarCart from "../SideBarCart";
import SideBarNav from "../SideBarNav";
import NavMenu from "../NavMenu";
import MainContent from "../MainContent";

function Layout(){

    const [showCart, setShowCart] = useState(false);

    function clickShowCart() {
        setShowCart(!showCart);
        return console.log(showCart);
    };


    const [showNav, setShowNav] = useState(false);

    function clickShowNav() {
        setShowNav(!showNav);
        return console.log(showNav);
    };

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
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Accessories</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Clothes</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Contact</a>
                            </nav>
                        </div>
                        
                        <div className="justify-center flex-1 flex">
                            <img className="h-8" src="https://res.cloudinary.com/djhntsyxr/image/upload/v1619116001/jetcompanybr/jetcompany-logomarca_ifpspo.png"></img>
                        </div>

                        <div className="flex justify-end flex-1 space-x-8">
                        <CartPerson clickShowCart={clickShowCart} />
                        </div>

                    </div>
                </div>
            </div>

            <main className="MainContent bg-write">
                <MainContent />
            </main>
            
        
            <footer>
                <div className="mx-auto max-w-8xl px-6">
                    footer
                </div>
            </footer>


            <SideBarCart
                showCart={showCart}
                clickShowCart={clickShowCart}
            />

            <SideBarNav clickShowNav={clickShowNav} showNav={showNav}/>

        </div>

    );
};

export default Layout;