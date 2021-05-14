import NavMenu from './NavMenu';

function SideBarCart(props){

    return(

        <div className={props.showNav ? 'SideBarNav w-1/5' :  'SideBarNav w-1/5 hidden'}>
        <div className="absolute inset-0 overflow-hidden">
                <section className="absolute inset-y-0 left-0 max-w-full flex outline-none">
                    <div className="h-full md:w-screen md:max-w-md">
                        <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto bg-gray-200">
                            <div className="flex flex-col h-full">
                                <header className="px-4 pt-4 pb-4 sm:px-6">
                                    <div className="flex items-start justify-between space-x-3">
                                        
                                        
                                        <NavMenu clickShowNav={props.clickShowNav}/>



                                    </div>  
                                </header>


                                
                            <nav className="flex-col flex gap-3 px-4 items-start">
                                <a className="cursor-pointer inline-flex items-center text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">All</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Accessories</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Clothes</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Contact</a>
                            </nav>

                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </div>

    );
};

export default SideBarCart;