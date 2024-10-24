import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center mt-8">
      {/* Explore Products Button */}
      <Link
        to="/products"
        className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all text-center"
      >
        Explore Products
      </Link>

      {/* Contact Us Button */}
      <Link
        to="/contact"
        className="bg-white text-red-600 py-2 px-6 rounded-full border border-red-600 hover:bg-red-600 hover:text-white transition-all text-center"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Buttons;
