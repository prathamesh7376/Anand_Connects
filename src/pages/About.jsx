import { motion } from "framer-motion"; // Import motion from Framer Motion
import MakhanaQuality from "../assets/Quality-Makhana.jpeg"; // Add your image path here
import Farming from "../assets/Makhana-Farming.jpeg"; // Add your image path here
import makhanaExport from "../assets/MakhanaExport.jpeg"; // Add your image path here
import spiecyMakhana from "../assets/Spicy_Masala_Makhana.jpg"; // Add your image path here
import Pastapacket from "../assets/PastaPacket.jpeg"; // Add your image path here
import Buttons from "../components/Buttons";

const About = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section: All About Anand Connects */}
      <motion.div
        className="bg-white p-8 md:p-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All About Anand Connects
          </h1>
          <p className="text-lg text-gray-700">
            We have been serving irresistible makhana since 2020. Our mission is
            to make makhana available globally.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Makhana is the superfood you know you need. Learn about its amazing
            health benefits and try out delicious recipes!
          </p>
          <a
            href="#learn-more"
            className="mt-6 inline-block bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition-all duration-300"
          >
            LEARN MORE
          </a>
        </div>
      </motion.div>

      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen mt-2 md:mt-4">
        {/* Image Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={makhanaExport}
            alt="Makhanas"
            className="w-3/4 h-3/4 mx-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col items-start justify-center p-8 md:p-16 bg-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At Anand Connects, we specialize in the export of superior-grade
            Makhanas, also known as Fox Nuts or Lotus Seeds. Our mission is to
            deliver the finest quality products that delight the taste buds of
            consumers worldwide. With years of industry expertise and a
            dedicated team, we ensure that each batch of Makhanas meets
            stringent quality standards.
          </p>
          <Buttons />
        </motion.div>
      </div>

      {/* Our Makhanas Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen mt-4 md:mt-8">
        {/* Content Section */}
        <motion.div
          className="flex flex-col items-start justify-center p-2 md:p-4 bg-white order-2 md:order-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Our Makhanas</h3>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We take immense pride in offering an extensive range of Makhanas,
            carefully selected for their freshness, flavor, and nutritional
            value. Our products undergo rigorous quality checks, ensuring they
            are free from impurities and adhere to international food safety
            standards. Whether you’re looking for classic plain Makhanas, spicy
            masala-infused varieties, or gourmet flavors, we have an option to
            suit every palate.
          </p>
          <Buttons />
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative order-1 md:order-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={MakhanaQuality}
            alt="Makhanas"
            className="w-3/4 h-3/4 mx-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Makhana Sections as Cards */}
      <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-8 mt-2 md:mt-4 px-4 md:px-8">
        {/* High-Quality Makhana Card */}
        <motion.div
          className="flex flex-col w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={Farming}
              alt="High quality Makhana"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              High Quality Makhana Sourced directly from the farm of Bihar
            </h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Bihar is 70-80% of the global producer of Makhana, ensuring a rich
              and sustainable supply for customers worldwide.
            </p>
            <p className="mt-2 text-yellow-500">★★★★★</p>
          </div>
        </motion.div>

        {/* Processed Makhana Products Card */}
        <motion.div
          className="flex flex-col w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={spiecyMakhana}
              alt="Lotus Seeds Peas Curry"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Apart from raw makhana, we also deliver processed makhana products
            </h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              From traditional snacks to gourmet products, we offer a wide range
              of processed Makhana varieties that cater to all tastes.
            </p>
            <p className="mt-2 text-yellow-500">★★★★★</p>
          </div>
        </motion.div>

        {/* Makhana Snacks Card */}
        <motion.div
          className="flex flex-col w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={Pastapacket}
              alt="Makhana Pasta"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              2-minute Readymade Makhana Pasta
            </h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Quick, easy, and nutritious! Our 2-minute Makhana pasta is perfect
              for a healthy meal on the go.
            </p>
            <p className="mt-2 text-yellow-500">★★★★★</p>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center h-full">
        <Buttons />
      </div>
    </section>
  );
};

export default About;
