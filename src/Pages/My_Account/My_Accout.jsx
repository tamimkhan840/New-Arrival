

function My_Accout() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-10">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            <a href="#" className="hover:underline">Home</a> / <span>My Account</span>
          </div>
          <div className="text-sm text-gray-500">
            Welcome! <span className="text-red-500">Md Rimel</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2">Manage My Account</h2>
              <ul>
                <li className="mb-2 text-red-500">My Profile</li>
                <li className="mb-2 text-gray-500">Address Book</li>
                <li className="mb-2 text-gray-500">My Payment Options</li>
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2">My Orders</h2>
              <ul>
                <li className="mb-2 text-gray-500">My Returns</li>
                <li className="mb-2 text-gray-500">My Cancellations</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-2">My Wishlist</h2>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input type="text" value="Md" className="w-full p-2 border border-gray-300 rounded" readOnly />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input type="text" value="Rimel" className="w-full p-2 border border-gray-300 rounded" readOnly />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" value="rimel111@gmail.com" className="w-full p-2 border border-gray-300 rounded" readOnly />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input type="text" value="Kingston, 5236, United State" className="w-full p-2 border border-gray-300 rounded" readOnly />
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Password Changes</h3>
                <div className="mb-4">
                  <input type="password" placeholder="Current Password" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <input type="password" placeholder="New Password" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <input type="password" placeholder="Confirm New Password" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="button" className="text-gray-500 mr-4">Cancel</button>
                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My_Accout