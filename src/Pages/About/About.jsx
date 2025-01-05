import about from '../../assets/Images/about-1.png'
import aboutTwo from '../../assets/Images/about-2.png'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Our Story Section */}
      <section className=" flex flex-col lg:flex-row gap-8 items-center">
        <div className='lg:max-w-[400px]'>
          <h1 className="text-3xl font-semibold mb-4 ">Our Story</h1>
          <p className="text-gray-600 mb-6">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with a creative presence in technologies. Supported by a
            wide range of logistical, marketing, and data services solutions,
            Exclusive has 150K+ active sellers and more than 3 million customers
            across the region.
          </p>
        </div>
        <div className="flex justify-center mb-8 w-full">
          <img
            src={about}
            alt="Our Story"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { count: "10.5k", text: "Sellers active on our site" },
          { count: "33k", text: "Monthly Product Sales", highlight: true },
          { count: "45.5k", text: "Customer active on our site" },
          { count: "25k", text: "Annual gross sales in our site" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`p-4 border rounded-lg text-center ${stat.highlight ? "bg-red-500 text-white" : "bg-white"
              }`}
          >
            <h2 className="text-2xl font-bold">{stat.count}</h2>
            <p className={`${stat.highlight ? "" : "text-gray-600"}`}>
              {stat.text}
            </p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="text-center mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center" >
            <img
              src={aboutTwo}

              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Tom Cruise</h3>
            <p className="text-gray-600 mb-2">Founder & Chairman</p>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center" >
            <img
              src={aboutTwo}

              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Tom Cruise</h3>
            <p className="text-gray-600 mb-2">Founder & Chairman</p>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center" >
            <img
              src={aboutTwo}

              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Tom Cruise</h3>
            <p className="text-gray-600 mb-2">Founder & Chairman</p>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            title: "Free and Fast Delivery",
            description: "Free delivery for all orders over $100.",
            icon: "fas fa-truck",
          },
          {
            title: "24/7 Customer Service",
            description: "Friendly 24/7 customer support.",
            icon: "fas fa-headset",
          },
          {
            title: "Money Back Guarantee",
            description: "We return money within 30 days.",
            icon: "fas fa-undo",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-white shadow-md rounded-lg text-center"
          >
            <div className="text-red-500 text-4xl mb-4">
              <i className={feature.icon}></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
