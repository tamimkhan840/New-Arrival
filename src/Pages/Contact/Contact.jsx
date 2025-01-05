
import { MdMarkEmailRead } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:mt-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Information Section */}
        <div className="w-full lg:w-1/3 bg-white shadow-md p-6 rounded-md">
          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className=" bg-red-600 p-2 rounded-full text-white">
              <IoCallSharp />
              </span>
              Call To Us
            </h3>
            <p className="text-gray-600">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-800 font-medium">Phone: +880123456789</p>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="bg-red-600 p-2 rounded-full text-white">
              <MdMarkEmailRead />
              </span>
              Write To Us
            </h3>
            <p className="text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-800 font-medium">
              Emails: customer@exclusive.com
            </p>
            <p className="text-gray-800 font-medium">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-2/3 bg-white shadow-md p-6 rounded-md">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none md:col-span-2"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-500 outline-none mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-600 w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
