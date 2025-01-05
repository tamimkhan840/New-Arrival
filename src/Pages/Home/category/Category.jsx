
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Phones from '../../../assets/Images/phone.png'
import Computers from "../../../assets/Images/Category-Computer.png"
import SmartWatch from "../../../assets/Images/Category-SmartWatch.png"
import Camera from "../../../assets/Images/Category-Camera.png"
import HeadPhones from "../../../assets/Images/Category-Headphone.png"
import Gaming from "../../../assets/Images/Category-Gamepad.png"
function Category() {

    const categories = [
        { name: 'Phones', icon: Phones },
        { name: 'Computers', icon: Computers},
        { name: 'SmartWatch', icon:SmartWatch },
        { name: 'Camera', icon: Camera,},
        { name: 'HeadPhones', icon: HeadPhones},
        { name: 'Gaming', icon: Gaming},
    ];


    return (
        <div className="py-8 ">
            <div className="flex items-center mb-4">
                <div className="w-4 h-8 mr-2 bg-red-500"></div>
                <h2 className="text-lg font-semibold text-red-500">Categories</h2>
            </div>
            <div className='flex items-center justify-between'>
                <h1 className="mb-6 text-2xl font-bold md:text-3xl">Browse By Category</h1>
                <div className="flex items-center justify-end space-x-2">
                    <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:scale-105">
                        <FaArrowLeft />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:scale-105">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {categories.map((category, index) => (
                    <div key={index} className={`flex flex-col items-center justify-center w-full h-32 border hover:shadow-2xl cursor-pointer hover:bg-rose-500 text rounded-lg`}>
                        <img src={category.icon} alt="" />
                        <span className="text-sm">{category.name}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Category