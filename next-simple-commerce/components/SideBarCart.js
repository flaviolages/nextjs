import { AiOutlineClose } from 'react-icons/ai';
import CartPerson from './CartPerson';

function SideBarCart(props){

    return(

        <div className={props.showCart ? 'SideBarCart hidden' : 'SideBarCart'}>
        <div className="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
                <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
                    <div className="h-full md:w-screen md:max-w-md">
                        <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto bg-gray-200">
                            <div className="flex flex-col h-full">
                                <header className="px-4 pt-6 pb-4 sm:px-6">
                                    <div className="flex items-start justify-between space-x-3">
                                        <div className="h-7 flex items-center">
                                            <button onClick={props.clickShowCart} className="hover:text-gray-600">
                                            <AiOutlineClose />
                                            </button>
                                        </div>
                                       
                                        <CartPerson clickShowCart={props.clickShowCart}/>
                                        

                                    </div>
                                </header>


                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </div>

    );
};

export default SideBarCart;