import { BiMenuAltLeft } from 'react-icons/bi'




function  NavMenu({clickShowNav}) {


    return(

        <button onClick={clickShowNav}>
         <BiMenuAltLeft />
        </button>

    );
};

export default NavMenu;