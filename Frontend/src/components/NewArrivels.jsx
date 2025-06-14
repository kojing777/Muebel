import newArriver from "../assets/newArrivel.png";

const NewArrivels = () => {
  return (
    <div className="bg-[#fbf2d4]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 py-8 min-h-[500px]">
        {/* Image Section */}
        <div className="w-full md:w-[75%] flex justify-start items-center -ml-4 md:-ml-8">
          <img
            className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain scale-105"
            src={newArriver}
            alt="Premium Asgaard Sofa"
          />
        </div>

        {/* Text Content Section */}
       <div className="w-full md:w-[35%] text-start space-y-4 md:-ml-4 lg:-ml-8">

          <p className="flex justify-start items-center gap-1 text-gray-500 text-xsm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1m7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0"
                fill="#6B7280"
              />
            </svg>
            NEW ARRIVALS
          </p>
          
          <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight">
            ASGAARD
            <span className="inline-block bg-orange-400 text-white font-extrabold px-3 -mb-1 border-b-3 border-indigo-700">
              SOFA
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg">
            Handcrafted Scandinavian sofa with premium aniline leather. 
            Features ergonomic design with pocket spring cushions for 
            ultimate comfort. Available in 6 colors.
          </p>
          
          <div className="pt-2">
            <button className="bg-purple-600 text-white text-xl font-extrabold px-5 py-3 rounded shadow hover:bg-blue-700 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivels;