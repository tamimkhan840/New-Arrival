/* eslint-disable react/no-unknown-property */


function Order_Summary() {
  return (
    <div className="mx-auto mt-6  col-span-4  lg:w-full">
            <div className=" rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Order summary</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex  justify-between gap-4 items-center">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400 mt-2">price</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                    <dd className="text-base font-medium text-green-600">-$299.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
                </dl>
              </div>

              <a href="#" className="flex justify-center bg-red-400 py-2 rounded-lg text-black font-semibold hover:scale-110 duration-300 mt-3">Proceed to Checkout</a>


            </div>


          </div>
  )
}

export default Order_Summary