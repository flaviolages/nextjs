import { BiMenu } from 'react-icons/bi';
import Menu from './Menu';

function Header(){
    return(

        <div>

        <div className="flex flex-row bg-white bordercolor text-gray-700 justify-between px-4 py-4">

            <button className="text-2xl color1">
                <BiMenu/>
            </button>

            <div>
                logo
            </div>

            <div>
                nav
            </div>

        </div>

        <Menu />


        </div>
    );
}

export default Header;