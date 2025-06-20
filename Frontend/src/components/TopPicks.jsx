import React from 'react';
import tablemirror from '../assets/tablemirror.png';
import officetable from '../assets/officetable.png';
import familytable from '../assets/familytable.png';
import sofa from '../assets/sofa.png';
import { FiArrowRight } from 'react-icons/fi';
import { TbShoppingCart } from "react-icons/tb";

const TopPicks = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Table Mirror",
      description: "Modern acrylic table mirror with LED lighting",
      price: "Rs. 3,499.00",
      image: tablemirror,
      tag: "Bestseller", 
      tagColor: "bg-amber-100 text-amber-800" 
    },
    {
      id: 2,
      name: "Minimalist Office Table",
      description: "Sleek wooden office table with cable management",
      price: "Rs. 12,999.00",
      image: officetable,
      tag: "New Arrival", 
      tagColor: "bg-blue-200 text-blue-800" 
    },
    {
      id: 3,
      name: "Family Dining Table",
      description: "6-seater premium teakwood dining table set",
      price: "Rs. 24,999.00",
      image: familytable,
      tag: "Limited Stock", 
      tagColor: "bg-red-100 text-red-800"
    },
    {
      id: 4,
      name: "Luxury Sofa Set",
      description: "3-seater velvet sofa with premium cushions",
      price: "Rs. 32,499.00",
      image: sofa,
      tag: "Premium", 
      tagColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-25 py-16 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Top Picks For You</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find a bright ideal to suit your taste with our great selection of furniture for every room in your home.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {products.map((product) => (
          <div key={product.id} className="group overflow-hidden rounded-lg shadow-md  transition-shadow duration-300 bg-white relative">
            {/* Product Tag */}
            {product.tag && (
              <span className={`absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-full ${product.tagColor}`}>
                {product.tag}
              </span>
            )}
            
            <div className="h-48 md:h-56 bg-gray-50 flex items-center justify-center p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-purple-700">{product.price}</span>
                <button className="text-purple-600 hover:text-purple-900 transition-colors">
                  <TbShoppingCart className="w-10 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-700 font-medium rounded-full hover:bg-purple-50 transition-colors">
          View More
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TopPicks;