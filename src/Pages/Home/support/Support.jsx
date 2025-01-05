import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
function Support() {
    return (
        <div class="flex flex-col md:flex-row justify-around items-center py-11 px-4">
            <div class="flex flex-col items-center text-center">
                <div class="bg-gray-300 rounded-full p-4 mb-4">
                <TbTruckDelivery />
                </div>
                <h3 class="font-bold text-lg">FREE AND FAST DELIVERY</h3>
                <p class="text-sm text-gray-600">Free delivery for all orders over $140</p>
            </div>
            <div class="flex flex-col items-center text-center">
                <div class="bg-gray-300 rounded-full p-4 mb-4">
                <FaHeadset />
                </div>
                <h3 class="font-bold text-lg">24/7 CUSTOMER SERVICE</h3>
                <p class="text-sm text-gray-600">Friendly 24/7 customer support</p>
            </div>
            <div class="flex flex-col items-center text-center">
                <div class="bg-gray-300 rounded-full p-4 mb-4">
                <SiAdguard />
                </div>
                <h3 class="font-bold text-lg">MONEY BACK GUARANTEE</h3>
                <p class="text-sm text-gray-600">We return money within 30 days</p>
            </div>
        </div>
    )
}

export default Support