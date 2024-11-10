import { AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      <Image
        src='https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-90"
        alt="Background Image"
        quality={100}
        layout="fill"
      />
      
      {/* Animated Heading and Paragraph */}
      <div className="absolute top-[20%] text-center animate-fadeInDown">
        <h1 className="text-4xl font-bold text-gray-800 text-shadow-md mb-2 animate-fadeInUp">Find Your Perfect Ride</h1>
        <p className="text-xl text-gray-700 text-shadow-md animate-fadeInUp">Discover top destinations and book cars with ease.</p>
      </div>

      {/* Form with inputs and search button */}
      <form className="absolute top-[60%] transform -translate-y-1/2 flex flex-wrap items-center gap-4 max-w-3xl w-4/5 p-6 rounded-xl bg-white bg-opacity-85 shadow-lg animate-fadeInUp">
        <div className="flex flex-col w-full">
          <label className="text-lg font-medium text-gray-800 mb-2">Location</label>
          <input
            className="textInput px-3 py-2 text-base border border-gray-300 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Search Location"
          />
        </div>
        
        <div className="flex flex-col w-full">
          <label className="text-lg font-medium text-gray-800 mb-2">From</label>
          <input type="date" className="textInput px-3 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-lg font-medium text-gray-800 mb-2">Until</label>
          <input type="date" className="textInput px-2 py- text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div className="flex items-center gap-4 w-full">
          <button className="btn px-6 py-2 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-indigo-700 transition-transform duration-300 ease transform hover:scale-105">
            Search for cars
          </button>
          <AiOutlineSearch size={25} className="text-indigo-600 transition-transform duration-300 ease transform hover:rotate-12" />
        </div>
      </form>
    </div>
  );
};

export default Hero;
