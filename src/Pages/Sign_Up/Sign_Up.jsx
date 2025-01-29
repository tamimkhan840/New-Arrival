import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import img from '../../assets/Images/Side sign up Image.png';
import { ShopContext } from '../../Context/Context';

function Sign_Up() {
  const { signUpWithEmailAndPassword } = useContext(ShopContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmailAndPassword(email, password, );
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="hidden md:block">
          <img
            src={img}
            alt="A smartphone leaning against a shopping cart with shopping bags"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your details below</p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Create Account
              </button>
            </div>
          </form>
          <Link to={'/log-in'} className="mt-8 text-sm text-gray-600">
            Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
