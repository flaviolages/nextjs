import {MdHome} from 'react-icons/md'
import {AiOutlineSearch, AiTwotonePhone} from 'react-icons/ai'
import {HiIdentification} from 'react-icons/hi'
import {GiPoliceBadge} from 'react-icons/gi'

function Menu(){
    return(
        <div className=" absolute inset-y-0 left-0 mt-16 w-56 flex flex-col text-gray-500">
        
        <div className="flex flex-row items-center hover:bg-gray-200 pl-4 py-2 hover:text-blue-600 rounded-r-xl">
        <AiOutlineSearch /> 
        <input className="w-40 ml-3 border-b border-gray-200 "></input>
        </div>
  

        <button className="flex flex-row items-center hover:bg-gray-200 pl-4 py-2 hover:text-blue-600 rounded-r-xl">
        <MdHome  className="text-xl" /> 
        <h3 className="ml-3 font-semibold text-sm">Página Inicial</h3>
        </button>


            
        <button className="flex flex-row items-center hover:bg-gray-200 pl-4 py-2 hover:text-blue-600 rounded-r-xl">
        <HiIdentification className="text-xl"/> 
        <h3 className="ml-3 font-semibold text-sm">Sobre Nós</h3>
        </button>


        
        <button className="flex flex-row items-center hover:bg-gray-200 pl-4 py-2 hover:text-blue-600 rounded-r-xl">
        <AiTwotonePhone className="text-xl"/> 
        <h3 className="ml-3 font-semibold text-sm">Contato</h3>
        </button>

        
  
        <button className="flex flex-col items-center pl-4 py-2 absolute bottom-0 left-0">
        
        <div className="flex flex-row">
        <h3 className="ml-3 font-semibold text-xs hover:text-blue-600">Politica de Privacidade.</h3>
        </div>

        <div className="flex flex-row">
        <h3 className="ml-3 font-semibold text-xs hover:text-blue-600">Todos direitos reservados.</h3>
        </div>


        </button>

        
        

        </div>
    );
}

export default Menu;