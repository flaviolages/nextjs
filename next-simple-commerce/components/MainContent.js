import { IoIosAddCircle } from 'react-icons/io'

function MainContent({produtos}) {
    return(
        <div className="mx-auto max-w-8xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20">

                <div className="col-span-8 lg:col-span-2 order-1 lg:order-none">
                    <div className="relative inline-block w-full">
                        all
                    </div>
                </div>
                

                <div className="col-span-8 order-3 lg:order-none">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9">
                      
                      


                    
                        {produtos.map(produto => ( 
                        <div className="max-h-full  relative w-full h-full mb-20">
                  
                        <a href="#" className="flex bg-gray-500 items-center justify-items-center overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120">
                            <div className="block overflow-hidden relative">
                                <div className="block relative">
                                    <img src={produto.imagen1}></img>
                                </div>
                            </div>
                        </a>

                        <div className="flex flex-row justify-between box-border w-full z-20 absolute items-center py-2">
                           <div className="pr-16 max-w-full mt-2 ml-1">
                            <h3 className="max-w-full w-full bg-white p-1">
                            {produto.titulo}
                            </h3>
                            <span className="bg-white inline-block pl-1">
                             R$ {produto.preco}
                            </span>

                           </div>

                           <div className="cursor-pointer">
                               <button className="text-4xl text-gray-300 bg-black rounded-full h-10 w-10 flex items-center justify-center">
                                   +
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