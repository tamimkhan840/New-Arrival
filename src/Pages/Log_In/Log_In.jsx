import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../../Context/Context";

const Log_In = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { loginWithGoogle, loginWithGithub, loginWithEmailAndPassword } = useContext(ShopContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = "ইমেইল প্রয়োজন";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      formErrors.email = "একটি বৈধ ইমেইল প্রদান করুন";
    }

    if (!password) {
      formErrors.password = "পাসওয়ার্ড প্রয়োজন";
    } else if (password.length < 6) {
      formErrors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
    }

    setErrors(formErrors);

    if (email && password) {
        loginWithEmailAndPassword(email, password);
      } else {
        alert("ইমেইল এবং পাসওয়ার্ড প্রদান করুন");
      }
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-96 p-6 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">লগইন করুন</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">ইমেইল</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল দিন"
              className={`w-full p-2 border rounded-lg focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">পাসওয়ার্ড</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="আপনার পাসওয়ার্ড দিন"
              className={`w-full p-2 border rounded-lg focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl">
            লগইন
          </button>
        </form>
        <div className="flex justify-around mt-4">
          <button onClick={loginWithGoogle} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl mr-2">
            Google লগইন
          </button>
          <button onClick={loginWithGithub} className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-xl">
            GitHub লগইন
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Log_In;
