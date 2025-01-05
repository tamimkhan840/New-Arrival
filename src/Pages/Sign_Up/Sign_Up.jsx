
import { Link } from 'react-router-dom'
import img from '../../assets/Images/Side sign up Image.png'
function Sign_Up() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="hidden md:block ">
            <img src={img} alt="A smartphone leaning against a shopping cart with shopping bags" className="object-cover w-full h-full" />
        </div>
        <div className="w-full p-8 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900">Create an account</h2>
            <p className="mt-2 text-sm text-gray-600">Enter your details below</p>
            <form className="mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
                    <input type="text" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mt-6">
                    <button type="submit" className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Create Account</button>
                </div>
                <div className="mt-4">
                    <button type="button" className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <i className="mr-2 fab fa-google"></i> Sign up with Google
                    </button>
                </div>
            </form>
            <Link to={'/log-in'} className="pt-8 text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a></Link>
        </div>
    </div>
</div>
  )
}

export default Sign_Up