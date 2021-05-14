import CartPerson from "../CartPerson";
import SideBarCart from "../SideBarCart";

function Layout(){


    return(
        <div>
            
            <div className="NavBar">
                <div className="mx-auto max-w-8xl px-6">
                    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
                        
                        <div className="flex items-center flex-1">
                            <nav className="hidden ml-6 space-x-4 lg:block">
                                <a className="cursor-pointer inline-flex items-center text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Acessórios</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Roupas</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Sapatos</a>
                                <a className="cursor-pointer inline-flex items-cente text-sm font-semibold text-gray-500 hover:text-gray-900" href="#">Tudo</a>
                            </nav>
                        </div>
                        
                        <div className="justify-center flex-1 flex">Logo</div>

                        <div className="flex justify-end flex-1 space-x-8">
                        <CartPerson/>
                        </div>

                    </div>
                </div>
            </div>

            <main className="MainContent bg-yellow-900">
                main
            </main>
            
        
            <footer>
                <div className="mx-auto max-w-8xl px-6 bg-green-600">
                    footer
                </div>
            </footer>


            <SideBarCart/>


        </div>

    );
};

export default Layout;