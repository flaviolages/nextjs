

function Layout(){
    return(
        <div>
            
            <div className="NavBar bg-yellow-300">
                <div className="mx-auto max-w-8xl px-6">
                    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
                        
                        <div className="flex items-center flex-1">Menu</div>
                        
                        <div className="justify-center flex-1 flex">Logo</div>

                        <div className="flex justify-end flex-1 space-x-8">Cart</div>

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
        </div>

    );
};

export default Layout;