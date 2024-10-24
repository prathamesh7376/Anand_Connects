import { motion } from "framer-motion";
import Button2 from "../components/Button2";
import products from "../productData"; // Adjust path based on file structure

const Products = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Our Makhana Product Range
      </h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Stagger animation for each product
              ease: "easeInOut",
            }}
          >
            {/* Product Image */}
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />

            {/* Product Name */}
            <h2 className="text-2xl font-semibold text-black mb-2">
              {product.name}
            </h2>

            {/* Product Description */}
            <p className="text-gray-700 text-base mb-4">
              {product.description}
            </p>

            <Button2 />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
