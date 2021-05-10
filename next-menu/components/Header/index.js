import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Menu from './Menu';

function Header(){

   const [showNav, setShowNav] = useState(false);

    return(

        <div>

        <div className="flex flex-row bg-white bordercolor text-gray-700 justify-between px-4 py-4">

            <button className="text-2xl color1" onClick={() => setShowNav(!showNav)}>
                <BiMenu/>
            </button>

            <div>
                logo
            </div>

            <div>
                nav
            </div>

        </div>

        {showNav && <Menu />}


        </div>
    );
}

export default Header;