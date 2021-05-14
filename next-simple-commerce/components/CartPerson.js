import {BiCart} from 'react-icons/bi';
import {BsFillPersonFill } from 'react-icons/bs';




function  CartPerson() {


    return(

        <div className="space-y-1">
        <nav className="relative">
            <div>
                <ul className="flex flex-row items-center justify-items-end h-full">
                    <button className="mr-2 cursor-pointer flex items-center relative text-gray-600 text-2xl hover:text-gray-900"><BiCart /></button>
                    <button className="mr-2 cursor-pointer flex items-center relative text-gray-600 text-2xl hover:text-gray-900"><BsFillPersonFill /></button>
                </ul>
            </div>
        </nav>    
    </div>

    );
};

export default CartPerson;