import React from 'react'
import { Link } from 'react-router-dom'

function Billing_Details() {
    return (
        <div className="container mx-auto p-4">
            <nav className="text-sm text-gray-500 mb-6">
                <a className="hover:underline" href="#">
                    Account
                </a>
                /
                <a className="hover:underline" href="#">
                    My Account
                </a>
                /
                <a className="hover:underline" href="#">
                    Product
                </a>
                /
                <Link to={'/add-to-cart'} className="hover:underline" href="#">
                    View Cart
                </Link>
                /
                <span className="text-black">
                    CheckOut
                </span>
            </nav>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">
                        Billing Details
                    </h2>
                    <htmlhtmlForm className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">
                                First Name*
                            </label>
                            <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="first-name" required="" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="company-name">
                                Company Name
                            </label>
                            <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="company-name" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="street-address">
                                Street Address*
                            </label>
                            <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="street-address" required="" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="apartment">
                                Apartment, floor, etc. (optional)
                            </label>
                            <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="apartment" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="town-city">
                                Town/City*
                            </label>
                            <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="town-city" required="" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="phone-number">
                                Phone Number*
                            </label>
                            <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="phone-number" required="" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email-address">
                                Email Address*
                            </label>
                            <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="email-address" required="" type="email" />
                        </div>
                        <div className="flex items-center">
                            <input className="h-4 w-4 text-red-600 border-gray-300 rounded" id="save-info" type="checkbox" />
                            <label className="ml-2 block text-sm text-gray-700" htmlFor="save-info">
                                Save this inhtmlhtmlFormation htmlhtmlFor faster check-out next time
                            </label>
                        </div>
                    </htmlhtmlForm>
                </div>
                <div className="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
                    <div className="border border-gray-300 p-4 rounded-md">
                        <div className="flex items-center mb-4">
                            <img alt="LCD Monitor" className="w-12 h-12 object-cover mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/U2sjY9j6v9pJA1TSw1Tq2sBO2eva3sAt03PzAxci00IUOD7JA.jpg" width="50" />
                            <span className="flex-1">
                                LCD Monitor
                            </span>
                            <span>
                                $650
                            </span>
                        </div>
                        <div className="flex items-center mb-4">
                            <img alt="HI Gamepad" className="w-12 h-12 object-cover mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/zvHe0ExsSkWLQiQ0hgyf9px1rP6oI7I6Bq22ShBdpNtqcG2TA.jpg" width="50" />
                            <span className="flex-1">
                                HI Gamepad
                            </span>
                            <span>
                                $1100
                            </span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>
                                Subtotal:
                            </span>
                            <span>
                                $1750
                            </span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>
                                Shipping:
                            </span>
                            <span>
                                Free
                            </span>
                        </div>
                        <div className="flex justify-between font-bold mb-4">
                            <span>
                                Total:
                            </span>
                            <span>
                                $1750
                            </span>
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center mb-2">
                                <input className="h-4 w-4 text-red-600 border-gray-300 rounded" name="payment-method" type="radio" />
                                <span className="ml-2">
                                    Bank
                                </span>
                                <img alt="Bank logos" className="ml-2" height="20" src="https://storage.googleapis.com/a1aa/image/RNVyzskpv55gNV8svi1Mzle0uQ6pfVf2HHiueSTWWHymyZYPB.jpg" width="100" />
                            </label>
                            <label className="flex items-center">
                                <input checked="" className="h-4 w-4 text-red-600 border-gray-300 rounded" name="payment-method" type="radio" />
                                <span className="ml-2">
                                    Cash on delivery
                                </span>
                            </label>
                        </div>
                        <div className="flex mb-4">
                            <input className="flex-1 p-2 border border-gray-300 rounded-l-md" placeholder="Coupon Code" type="text" />
                            <button className="bg-red-600 text-white p-2 rounded-r-md">
                                Apply Coupon
                            </button>
                        </div>
                        <button className="w-full bg-red-600 text-white p-2 rounded-md">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing_Details