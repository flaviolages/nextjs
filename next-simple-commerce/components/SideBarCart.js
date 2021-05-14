import { AiOutlineClose, AiOutlineDelete     } from 'react-icons/ai';
import CartPerson from './CartPerson';

function SideBarCart(props){

    return(

        <div className={props.showCart ? 'SideBarCart hidden' : 'SideBarCart '}>
        <div className="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
                <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
                    <div className="h-full md:w-screen md:max-w-md">
                        <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto bg-gray-200">
                            <div className="flex flex-col h-full">
                                <header className="px-4 pt-4 pb-4 sm:px-6">
                                    <div className="flex items-start justify-between space-x-3">
                                        <div className="h-7 flex items-center">
                                            <button onClick={props.clickShowCart} className="hover:text-gray-600">
                                            <AiOutlineClose />
                                            </button>
                                        </div>
                                       
                                        <CartPerson clickShowCart={props.clickShowCart}/>
                                        

                                    </div>
                                </header>


                                <div className="px-4 sm:px-6 flex-1">
                                    <h2 className="pt-1 pb-4 text-2xl leading-7 font-bold tracking-wide cursor-pointer inline-block">Carrinho</h2>

                                    <div className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accents-3 border-t border-accents-3">
                                        <ul className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accents-3 border-t border-accents-3">



                                            <li className="flex flex-row space-x-8 py-8">
                                               
                                                <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer">
                                                    <div className="">
                                                        <div className="block max-w-max">
                                                            <img src="https://res.cloudinary.com/djhntsyxr/image/upload/v1619286371/jetcompanybr/152500697_471461290903439_691640409675796578_n_z8f6xb.jpg"></img>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex-1 flex flex-col text-base">
                                                <h2 className="font-bold text-lg cursor-pointer leading-6">Produto</h2>
                                                </div>

                                                <div className="flex flex-col justify-between space-y-2 text-base">
                                                    <h3>R$190</h3>
                                                    <button className="flex justify-end outline-none">
                                                        <AiOutlineDelete />
                                                    </button>
                                                </div>
                                            </li>   


                                            <li className="flex flex-row space-x-8 py-8">
                                               
                                               <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer">
                                                   <div className="">
                                                       <div className="block max-w-max">
                                                           <img src="https://res.cloudinary.com/djhntsyxr/image/upload/v1619286371/jetcompanybr/152500697_471461290903439_691640409675796578_n_z8f6xb.jpg"></img>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="flex-1 flex flex-col text-base">
                                               <h2 className="font-bold text-lg cursor-pointer leading-6">Produto</h2>
                                               </div>

                                               <div className="flex flex-col justify-between space-y-2 text-base">
                                                   <h3>R$190</h3>
                                                   <button className="flex justify-end outline-none">
                                                       <AiOutlineDelete />
                                                   </button>
                                               </div>
                                           </li>



                                           <li className="flex flex-row space-x-8 py-8">
                                               
                                               <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer">
                                                   <div className="">
                                                       <div className="block max-w-max">
                                                           <img src="https://res.cloudinary.com/djhntsyxr/image/upload/v1619286371/jetcompanybr/152500697_471461290903439_691640409675796578_n_z8f6xb.jpg"></img>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="flex-1 flex flex-col text-base">
                                               <h2 className="font-bold text-lg cursor-pointer leading-6">Produto</h2>
                                               </div>

                                               <div className="flex flex-col justify-between space-y-2 text-base">
                                                   <h3>R$190</h3>
                                                   <button className="flex justify-end outline-none">
                                                       <AiOutlineDelete />
                                                   </button>
                                               </div>
                                           </li>



                                        </ul>
                                    </div>         


                                    <div className="border-t-2 border-b-2 border-gray-500">
                                    <div className="flex-shrink-0 px-4  py-5 sm:px-6">
                                        <ul className="py-3">
                                            <li className="flex justify-between py-1">
                                                <span>Subtotal</span>
                                                <span>R$211</span>
                                            </li>

                                            <li className="flex justify-between py-1">
                                                <span>Frete</span>
                                                <span>R$211</span>
                                            </li>
                                        </ul>

                                        <div className="flex justify-between border-t border-accents-3 py-3 font-bold mb-10">
                                        <span>Total</span>
                                        <span>R$211</span>
                                        </div>
                                    </div>
                                    </div>

                                    <button className="w-full bg-black py-4">
                                        <span className="text-gray-100">Comprar</span>
                                    </button>

                                </div>

                    

                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </div>

    );
};

export default SideBarCart;