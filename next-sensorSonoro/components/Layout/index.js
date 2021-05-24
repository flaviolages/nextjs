import { MdPets } from 'react-icons/md';

function Layout(){
    return(
        <div className="bg-gray-900">
            
            <div className="NavBar">
                <div className="mx-auto max-w-8xl px-6">
                    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
                        
                        <div className="flex items-center flex-1"></div>
                        
                        <div className="justify-center flex-1 flex"><MdPets /></div>

                        <div className="flex justify-end flex-1 space-x-8"></div>

                    </div>
                </div>
            </div>

            <main className="MainContent">
                mass
            </main>
            
        
          
        </div>

    );
};

export default Layout;