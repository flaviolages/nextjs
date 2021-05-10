import { useState } from 'react';
import { BiMenu, BiCart} from 'react-icons/bi';
import {BsPersonBoundingBox} from 'react-icons/bs';
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

            <div className="flex flex-row">
                <button className="text-2xl mr-8"><BiCart /></button>
                <button><BsPersonBoundingBox /></button>
            </div>

        </div>

        <Menu show={showNav}/>


        </div>
    );
}

export default Header;