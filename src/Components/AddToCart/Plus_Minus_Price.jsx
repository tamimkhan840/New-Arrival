/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { ShopContext } from "../../Context/Context";
function Plus_Minus_Price({data}) {

  const {addToCart,setAddToCart} = useContext(ShopContext)

  const deleteHandler = () => {
    setAddToCart(addToCart.filter(item => item.id !== data.id))
  }
  return (
    <div className="flex items-center justify-between md:order-3 md:justify-end">
      <div className="flex items-center">
        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
          </svg>
        </button>
        <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
        <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
          </svg>
        </button>
      </div>
      <MdOutlineDeleteForever onClick={deleteHandler} className="w-6 text-white h-6 ms-5 cursor-pointer hover:text-red-600" />
      <div className="text-end md:order-4 md:w-20">
        <p className="text-base font-bold text-gray-900 dark:text-white">${(data.price).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Plus_Minus_Price