import React, { useContext } from 'react'
import { FaUser, FaBoxOpen } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AccoutContext } from '../../Context/Manage_Accout';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
function Manage_Accout({ className }) {
    const { setIsOpen } = useContext(AccoutContext)
    

    const LogoutHandler = () => {
        signOut(auth)
            .then(() => {
            console.log('Logout');
            
            }).catch((error) => {
            console.log(error);
            
        })
    }
    return (
        <div className={`bg-gradient-to-b from-purple-500 ${className} to-gray-700 py-4 w-56 flex items-center justify-center rounded-md px-2`}>
            <div className={`space-y-6 text-white z-50 `}>
                <Link to={'/my-account'} onClick={()=> setIsOpen(false)} className="flex items-center space-x-4">
                <FaUser className='w-6 h-5' />
                    <span className="text-lg">Manage My Account</span>
                </Link>
                <div className="flex items-center space-x-4">
                <FaBoxOpen className='w-6 h-5' />
                    <span className="text-lg">My Order</span>
                </div>
                <div className="flex items-center space-x-4">
                <IoCloseCircleOutline className='w-6 h-5' />
                    <span className="text-lg">My Cancellations</span>
                </div>
                <div className="flex items-center space-x-4">
                <FaRegStar className='w-6 h-5' />
                    <span className="text-lg">My Reviews</span>
                </div>
                <div onClick={LogoutHandler} className="flex items-center space-x-4">
                <BiLogOut className='w-6 h-5' />
                    <span className="text-lg">Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Manage_Accout