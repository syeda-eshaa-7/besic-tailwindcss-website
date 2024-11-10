"use client";

import Image from "next/image";

const Driver = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-8 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex-1 flex justify-center items-center animate-zoomIn mb-6 md:mb-0">
        <Image
          src={"/drive.png"}
          alt="Driver"
          width={400}
          height={400}
          className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
          Find the perfect Car{" "}
          <span className="text-indigo-600">to try before you buy</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 animate-fadeIn">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          euismod, lacus in dictum ullamcorper, metus metus placerat enim Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis, nemo!.
        </p>
        <button className="px-6 py-3 text-white bg-indigo-600 rounded-lg font-semibold text-lg transition-transform duration-300 ease-in-out hover:bg-indigo-700 transform hover:scale-105 animate-fadeIn">
          Contact Driver
        </button>
      </div>
    </div>
  );
};

export default Driver;
