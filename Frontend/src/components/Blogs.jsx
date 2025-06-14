import React from "react";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Modern Living Room Designs",
      excerpt: "Discover the latest trends in living room furniture for 2023 and how to incorporate them into your space for a contemporary look.",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: blog1,
      category: "Interior Design"
    },
    {
      id: 2,
      title: "Sustainable Furniture Choices",
      excerpt: "Learn how to choose eco-friendly furniture without compromising on style or quality for your sustainable home.",
      date: "June 2, 2023",
      readTime: "7 min read",
      image: blog2,
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Space-Saving Solutions",
      excerpt: "Maximize small spaces with these clever furniture arrangements and multi-functional pieces for urban living.",
      date: "June 18, 2023",
      readTime: "4 min read",
      image: blog3,
      category: "Small Spaces"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">OUR BLOGS</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our latest articles and insights on furniture design, trends, and tips for your home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-25 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="group flex flex-col h-full overflow-hidden   transition-all duration-300 bg-white">
            <div className="h-64 md:h-80 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform rounded-lg duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-3 self-start">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-5 flex-grow">{post.excerpt}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center text-gray-500 text-xs">
                    <FiCalendar className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <FiClock className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
                  Read More
                  <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors hover:shadow-sm">
          View All Articles
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;