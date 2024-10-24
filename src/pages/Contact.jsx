import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    product: "",
    country: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const makhanaProducts = [
    "Plain Makhanas",
    "Spicy Masala Makhanas",
    "Honey Roasted Makhanas",
    "Cheese and Herb Makhanas",
    "Chocolate Covered Makhanas",
    "Organic Makhanas",
    "Flavored Makhanas (Various Flavors)",
  ];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Australia",
    "Netherlands",
    "Sweden",
    "Switzerland",
    "Norway",
    "Finland",
    "Belgium",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formEndpoint = "https://formspree.io/f/xovqvkyo"; // Replace with correct endpoint

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          product: "",
          country: "",
          description: "",
        });
      } else {
        setMessage(
          "There was an issue sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      <motion.div
        className="mb-6 text-lg text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p>
          At Anand Connects, we pride ourselves on delivering high-quality
          Makhana products to our customers. Whether you`re a wholesale
          distributor, retailer, or individual customer, we are here to assist
          you with all the information you need about our products.
        </p>
        <p className="mt-4">
          You can also schedule a call with our customer service team for more
          detailed discussions. We are happy to provide samples, nutritional
          information, and product catalogs on request.
        </p>
      </motion.div>

      <motion.form
        className="space-y-4 p-6 border rounded-lg bg-red-300 shadow-lg"
        onSubmit={handleSubmit}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">
            Name / Organization
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
            placeholder="Enter your name or organization"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold">
            Email
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
            placeholder="Enter your email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div>
          <label htmlFor="contactNo" className="block text-lg font-semibold">
            Contact No
          </label>
          <motion.input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
            placeholder="Enter your contact number"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-lg font-semibold">
            Product for Information
          </label>
          <motion.select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <option value="">Select a product</option>
            {makhanaProducts.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </motion.select>
        </div>
        <div>
          <label htmlFor="country" className="block text-lg font-semibold">
            Country
          </label>
          <motion.select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <option value="">Select your country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </motion.select>
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-semibold">
            Detailed Description
          </label>
          <motion.textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
            placeholder="Enter details about your query"
            rows="4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Submit
        </motion.button>
      </motion.form>
      {message && (
        <motion.p
          className="mt-4 text-center text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Contact;
