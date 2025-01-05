/* eslint-disable react/no-unknown-property */

import { useContext } from "react"
import { ShopContext } from "../../Context/Context"
import CartItem from "./CartItem"
import Order_Summary from "./Order_Summary"
import { IoCloseSharp } from "react-icons/io5";


function AddToCart() {

  const { onOpen, setOnOpen } = useContext(ShopContext)

  const { addToCart } = useContext(ShopContext)

  return (
    <>
      {onOpen && (
        <div>
          <section className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 transition-opacity duration-300 ease-out ">
            <div onClick={() => setOnOpen(false)} className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 transition-opacity duration-300 ease-out cursor-pointer">

            </div>
            <div className="transform z-50 dark:bg-slate-900 transition-all duration-300 ease-in-out  rounded-md xl:w-[850px] lg:w-[750px] md:w-[650px] sm:w-[550px] max-[643px]:w-[500px] max-[530px]:w-[400px] max-[414px]:w-[300px] lg:h-4/5 mt-20">
              <div className="flex justify-between mt-4 mx-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
                <IoCloseSharp onClick={() => setOnOpen(false)} className="w-8 h-8 cursor-pointer text-black dark:text-white" />
              </div>
              {/* Add to Cart */}
              <div className=" mt-8 grid grid-cols-12 gap-6 mx-4">
                <div className="mx-auto col-span-8 overflow-auto">
                  <div className="space-y-3 max-h-[320px] overflow-y-scroll scrollbar-hide rounded-xl">
                    {
                      addToCart.map(item => <CartItem key={item.id} data={item} />)
                    }

                  </div>

                </div>

                <Order_Summary />
              </div>
            </div>
          </section>

        </div>
      )}
    </>
  )
}

export default AddToCart