import cat2 from "../assets/cat2.png";
import cat1 from "../assets/cat1.png";
import { FiArrowRight } from "react-icons/fi";

const Category = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-15 bg-[#f6eeee]">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Shop By Category
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover premium furniture pieces tailored to elevate every space in your home. Choose a category to explore our stylish and functional collections.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Category 1 */}
        <div className="overflow-hidden rounded-xl">
          <div className="w-full h-64 md:h-80 flex items-center justify-center">
            <img
              src={cat1}
              alt="Living Room Furniture"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Living Room
            </h3>
            <p className="text-gray-600 mb-5">
              Modern sofas, stylish coffee tables, and cozy loungers to transform your living space.
            </p>
            <button
              className="bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-purple-700 transition"
              onClick={() =>
                (window.location.href = "/products?category=living-room")
              }
            >
              Explore Living Room
            </button>
          </div>
        </div>

        {/* Category 2 */}
        <div className="overflow-hidden rounded-2xl">
          <div className="w-full h-64 md:h-80 flex items-center justify-center ">
            <img
              src={cat2}
              alt="Bedroom Furniture"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl  font-semibold text-gray-800 mb-3">
              Bedroom
            </h3>
            <p className="text-gray-600 mb-5">
              Create your dream retreat with beds, nightstands, and wardrobes crafted for comfort and elegance.
            </p>
            <button
              className="bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-purple-700 transition"
              onClick={() =>
                (window.location.href = "/products?category=bedroom")
              }
            >
              Explore Bedroom
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          className="inline-flex items-center text-purple-700 hover:text-purple-900 transition-colors px-6 py-3 border border-purple-600 rounded-full hover:bg-purple-50"
          onClick={() => (window.location.href = "/products")}
        >
          View All Categories
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Category;