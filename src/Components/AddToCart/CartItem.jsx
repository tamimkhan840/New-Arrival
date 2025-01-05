
/* eslint-disable react/prop-types */


import Plus_Minus_Price from "./Plus_Minus_Price"


function CartItem({ data }) {
    const {image,title} = data
    return (
        <div className="rounded-lg border max-w-[700px] border-gray-200 px-3 py-1 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 ">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">

                    <img  className="rounded-lg  h-24 w-24 lg:w-14 lg:h-16 dark:block" src={image} alt="imac image" />
                </a>

                <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>



                <Plus_Minus_Price data={data} />



                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#" className="text-xs font-medium text-gray-900 hover:underline dark:text-white">{ title}</a>


                </div>
            </div>
        </div>
    )
}

export default CartItem