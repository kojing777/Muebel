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
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-blue-600 mb-2">
            Latest Articles
          </span>
          <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Furniture Insights & Trends
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our latest articles and insights on furniture design, trends, and tips for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="group flex flex-col h-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-card-enter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 md:h-72 lg:h-80 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiCalendar className="mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiClock className="mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <button className="group-hover:translate-x-1 transition-transform text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    Read More
                    <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16 animate-fade-in">
          <button className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all hover:shadow-md hover:border-gray-300 group">
            View All Articles
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-card-enter {
          animation: cardEnter 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Blogs;