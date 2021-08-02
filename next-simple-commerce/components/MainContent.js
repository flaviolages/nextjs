import { MdAddShoppingCart } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai'

function MainContent({produtos, addCart}) {
    return(
        <div className="mx-auto max-w-8xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">

                <div className="col-span-8 lg:col-span-2 order-1 lg:order-none">
                
                <div class="lg:hidden"><span class="rounded-md shadow-sm">
                    <button type="button" class="flex justify-between w-full rounded-sm border border-gray-300 px-4 py-3 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        All Categories
                        <span className="text-xs">
                        <AiFillCaretDown />
                        </span>
                </button></span></div>
                
                    <div className="relative inline-block w-full">
                        <div className="origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block hidden">
                            <div className="rounded-sm bg-white shadow-xs lg:bg-none lg:shadow-none">
                                <div role="menu" aria-orientation="vertical" aria-label="options-menu">
                                <ul>
                                    <li class="block text-sm leading-5 text-gray-700 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 underline">
                                        <a class="block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4" href="">
                                        All the products
                                        </a>
                                    </li>
                                    
                                    <li class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                                        <a class="block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4" href="">
                                            Accessories
                                        </a>
                                    </li>
                                    
                                    <li class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                                        <a class="block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4" href="">
                                            Clothes
                                        </a>
                                    </li>
                                </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="col-span-8 order-3 lg:order-none">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9">
                      
                      


                    
                        {produtos.map(produto => ( 
                        <div className="max-h-full  relative w-full h-full mb-20">
                  
                        <a href="#" className="flex bg-gray-500 items-center justify-items-center overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120">
                            <div className="block overflow-hidden relative">
                                <div className="block relative">
                                    <img src={produto.Fotos[0].link}></img>
                                </div>
                            </div>
                        </a>

                        <div className="flex flex-row justify-between box-border w-full z-20 absolute items-center py-2">
                           <div className="pr-16 max-w-full mt-2 ml-1">
                            <h3 className="max-w-full w-full bg-white p-1  text-xs text-gray-500">
                            {produto.Titulo}
                            </h3>
                            <span className="bg-white inline-block pl-1 text-gray-900 font-semibold text-xs">
                             R$ {produto.preco}
                            </span>

                           </div>

                           <div className="cursor-pointer">
                                <button className="text-2xl text-gray-600 hover:text-gray-900" onClick={()=>{addCart(produto.Titulo, produto.Fotos[0].link,produto.preco)}}>
                                    <MdAddShoppingCart />
                                </button>
                           </div>
                        </div>
                        </div>
                        ))}
                      

                        


                    
                    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainContent;