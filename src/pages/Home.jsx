import HomeImage from "../assets/Makhana-Home-Bowl.jpg";
import HelthBenefits from "../assets/Makhana-Benifits.jpeg";
import inDiet from "../assets/Home3.jpeg";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer motion

const Home = () => {
  // Define animation variants for better reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden flex flex-col h-auto">
      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 flex items-center justify-center p-8 w-full bg-pink-100"
      >
        <div className="space-y-4 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-black font-bold text-4xl md:text-5xl"
          >
            Makhana Delight
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-black text-xl md:text-2xl"
          >
            From Nature`s Heart to Your Home
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-black font-bold text-lg md:text-xl"
          >
            We offer the highest quality Makhana sourced from the pristine lakes
            of India.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-black font-semibold">
            Support@anandconnects.com
          </motion.p>

          {/* Call to Action Button */}
          <motion.div variants={fadeInUp} className="mt-4">
            <Link
              to="/contact"
              className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all"
            >
              Connect With Us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* First Pair: Additional Content Section with Text and Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white p-8"
      >
        <div className="flex flex-col md:flex-row md:space-x-8 md:items-center">
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2 flex flex-col space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Why Choose Makhana?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8">
              Makhana, also known as fox nuts or lotus seeds, is a superfood
              gaining popularity for its impressive health benefits and
              versatility. Whether you`re looking for a healthy snack or an
              ingredient to enhance your meals, makhana offers a unique
              combination of nutrition and taste.
            </p>
            <Buttons />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="md:w-1/2 mt-4 md:mt-0"
          >
            <img
              src={HomeImage}
              alt="Makhana"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Second Pair: Another Content Section with Text and Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white p-8 mt-8"
      >
        <div className="flex flex-col-reverse md:flex-row md:space-x-8 md:items-center">
          {/* Image on the left for larger screens */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="md:w-1/2 mt-4 md:mt-0"
          >
            <img
              src={HelthBenefits}
              alt="Makhana Health Benefits"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Text on the right */}
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2 flex flex-col space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Health Benefits of Makhana
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Makhana is packed with essential nutrients, making it a powerhouse
              of health benefits.
            </p>
            <Buttons />
          </motion.div>
        </div>
      </motion.div>

      {/* Third Pair: Additional Content Section with Text and Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white p-8 mt-8"
      >
        <div className="flex flex-col md:flex-row md:space-x-8 md:items-center">
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2 flex flex-col space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Makhana in Your Diet
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Incorporating makhana into your daily diet is simple and
              versatile.
            </p>
            <Buttons />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="md:w-1/2 mt-4 md:mt-0"
          >
            <img
              src={inDiet}
              alt="Makhana Diet"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
