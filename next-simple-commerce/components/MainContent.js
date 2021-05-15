import { IoIosAddCircle } from 'react-icons/io'

function MainContent() {
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
                      
                      

                        
                        <div className="max-h-full  relative w-full h-full mb-10">
                  
                        <a href="#" className="flex bg-gray-300 items-center justify-items-center overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120">
                            <div className="block overflow-hidden relative">
                                <div className="block relative">
                                    <img src="https://res.cloudinary.com/djhntsyxr/image/upload/v1621030538/jetcompanybr/image_1_ivcdvg.png"></img>
                                </div>
                            </div>
                        </a>

                        <div className="flex flex-row justify-between box-border w-full z-20 absolute items-center py-6">
                           <div className="top-0 pr-16 max-w-full ">
                            <h3 className="max-w-full w-full bg-white p-1">
                            Camiseta Black
                            </h3>
                            <span className="bg-white inline-block pl-1">
                             R$ 109,90
                            </span>

                           </div>

                           <div className="text-4xl cursor-pointer text-gray-800 hover:text-gray-700">
                               <button className=" text-5xl">
                                   <IoIosAddCircle />
                               </button>
                           </div>
                        </div>
                        </div>



                        <div className="max-h-full  relative w-full h-full mb-10">
                  
                  <a href="#" className="flex bg-gray-300 items-center justify-items-center overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120">
                      <div className="block overflow-hidden relative">
                          <div className="block relative">
                              <img src="https://res.cloudinary.com/djhntsyxr/image/upload/v1621030538/jetcompanybr/image_1_ivcdvg.png"></img>
                          </div>
                      </div>
                  </a>

                  <div className="flex flex-row justify-between box-border w-full z-20 absolute items-center py-6">
                     <div className="top-0 pr-16 max-w-full ">
                      <h3 className="max-w-full w-full bg-white p-1">
                      Camiseta Black
                      </h3>
                      <span className="bg-white inline-block pl-1">
                       R$ 109,90
                      </span>

                     </div>

                     <div className="text-4xl cursor-pointer text-gray-800 hover:text-gray-700">
                         <button className=" text-5xl">
                             <IoIosAddCircle />
                         </button>
                     </div>
                  </div>
                  </div>





                  <div className="max-h-full  relative w-full h-full mb-10">
                  
                  <a href="#" className="flex bg-gray-300 items-center justify-items-center overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120">
                      <div className="block overflow-hidden relative">
                          <div className="block relative">
                              <img src="https://res.cloudinary.com/djhntsyxr/image/upload/v1621030538/jetcompanybr/image_1_ivcdvg.png"></img>
                          </div>
                      </div>
                  </a>

                  <div className="flex flex-row justify-between box-border w-full z-20 absolute items-center py-6">
                     <div className="top-0 pr-16 max-w-full ">
                      <h3 className="max-w-full w-full bg-white p-1">
                      Camiseta Black
                      </h3>
                      <span className="bg-white inline-block pl-1">
                       R$ 109,90
                      </span>

                     </div>

                     <div className="text-4xl cursor-pointer text-gray-800 hover:text-gray-700">
                         <button className=" text-5xl">
                             <IoIosAddCircle />
                         </button>
                     </div>
                  </div>
                  </div>







                        


                    
                    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainContent;