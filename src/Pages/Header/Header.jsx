import logo from '../../assets/Images/logo.png'
import Header_Input from './Header_Input'
// import { GrFavorite } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { RiMenuFoldFill } from "react-icons/ri";
import { useContext } from 'react';
// import { ShopContext } from '../../Context/Context';
import { Cart, Favorite } from './Cart_Favorite';
import { AccoutContext } from '../../Context/Manage_Accout';
import Manage_Accout from '../manage_Accout/Manage_Accout';


function Header() {

  const {isOpen,setIsOpen} = useContext(AccoutContext)

  // const { addToCart, favorite } = useContext(ShopContext)
  return (
    <div className='sticky top-0 z-50 bg-white border-b'>
      <div className='container flex items-center  py-3 mx-auto gap-5'>
        <div className='flex items-center ml-auto lg:ml-2'>
           <img src={logo} alt="SnapnBuy shop" className='cursor-pointer w-12 pl-5' />
           <span className='text-xl font-bold'>Cartly</span>
        </div>
        <div className='hidden lg:block mx-auto'>
          <ul className='flex gap-8 font-semibold '>
            <li className='duration-300 hover:text-rose-600'><Link to={'/'}>Home</Link></li>
            <li className='duration-300 hover:text-rose-600'><Link to={'/contact'}>Contact</Link></li>
            <li className='duration-300 hover:text-rose-600'><Link to={'/about'}>About</Link></li>
            <li className='duration-300 hover:text-rose-600'><Link to={'/sign-up'}>Sign Up</Link></li>
          </ul>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center justify-between gap-4 max-[640px]:hidden'>
            <Header_Input />

            <Favorite />
            
            <Cart />
          </div>
          <div className='relative'>
          <MdAccountCircle onClick={() => setIsOpen(!isOpen)} className='h-8 cursor-pointer w-7 hover:scale-105' />
          {isOpen && (<Manage_Accout className='absolute right-0 top-9'/>)}
          </div>
        </div>
        <RiMenuFoldFill className='hidden max-[780px]:block w-10 h-7 ml-auto' />

      </div>
    </div>
  )
}

export default Header

