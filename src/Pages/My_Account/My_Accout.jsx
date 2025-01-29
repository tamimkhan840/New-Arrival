import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Context';
import { motion } from 'framer-motion';

function My_Account() {
  const { currentUser, logout } = useContext(ShopContext);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-10 bg-gray-100">
      <motion.div
        className="w-full max-w-6xl bg-white shadow-md rounded-lg p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            <a href="#" className="hover:underline text-blue-600">Home</a> / <span className="font-semibold">My Account</span>
          </div>
          <div className="text-sm text-gray-500">
            Welcome! <span className="text-red-500 font-semibold">{currentUser?.displayName || currentUser?.email}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2 text-gray-800">Manage My Account</h2>
              <ul>
                <li className="mb-2 hover:text-red-500 cursor-pointer transition-all duration-300">My Profile</li>
                <li className="mb-2 hover:text-red-500 cursor-pointer transition-all duration-300">Address Book</li>
                <li className="mb-2 hover:text-red-500 cursor-pointer transition-all duration-300">My Payment Options</li>
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2 text-gray-800">My Orders</h2>
              <ul>
                <li className="mb-2 hover:text-red-500 cursor-pointer transition-all duration-300">My Returns</li>
                <li className="mb-2 hover:text-red-500 cursor-pointer transition-all duration-300">My Cancellations</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2 text-gray-800">My Wishlist</h2>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <motion.h2
              className="text-2xl font-bold text-red-500 mb-6"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              Edit Your Profile
            </motion.h2>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input type="text" value={currentUser?.displayName?.split(' ')[0] || ''} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" readOnly />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input type="text" value={currentUser?.displayName?.split(' ')[1] || ''} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" value={currentUser?.email || ''} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" readOnly />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input type="text" value="Kingston, 5236, United States" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" readOnly />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Password Changes</h3>
                <div className="mb-4">
                  <input type="password" placeholder="Current Password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" />
                </div>
                <div className="mb-4">
                  <input type="password" placeholder="New Password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" />
                </div>
                <div>
                  <input type="password" placeholder="Confirm New Password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button type="button" className="text-gray-500 mr-4 hover:text-red-500 transition-all duration-300">Cancel</button>
                <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600 transition-all duration-300">Save Changes</button>
              </div>
            </form>

            <motion.button
              onClick={logout}
              className="mt-4 px-6 py-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Logout
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default My_Account;
