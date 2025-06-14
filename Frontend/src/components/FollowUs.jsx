import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const FollowUs = () => {
  return (
    <div className="relative mt-20">
      {/* Background image with overlay - Fixed styling */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('https://i.pinimg.com/736x/96/9b/3d/969b3d5da4f50c0e3d6a3b8b02953bbf.jpg')",
          zIndex: -1 
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative bg-[#fbebb5] bg-opacity-90 mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center gap-8 py-16">
        <h2 className="text-gray-800 text-3xl md:text-4xl font-bold text-center">Follow Us</h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl text-center">
          Stay updated with our latest products, offers, and news. Follow us on our social media channels!
        </p>
        
        {/* Social media buttons */}
        <div className="flex gap-6 mt-4">
          <a 
            href="#" 
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors rounded-full p-4 shadow-md hover:shadow-lg flex items-center justify-center w-12 h-12"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-lg" />
          </a>
          <a 
            href="#" 
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors rounded-full p-4 shadow-md hover:shadow-lg flex items-center justify-center w-12 h-12"
            aria-label="Twitter"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a 
            href="#" 
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors rounded-full p-4 shadow-md hover:shadow-lg flex items-center justify-center w-12 h-12"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a 
            href="#" 
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors rounded-full p-4 shadow-md hover:shadow-lg flex items-center justify-center w-12 h-12"
            aria-label="Pinterest"
          >
            <FaPinterest className="text-lg" />
          </a>
        </div>
        
        {/* Follow Us Button */}
        <button className="mt-8 bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default FollowUs;