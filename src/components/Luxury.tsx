
import Image from 'next/image';

const Luxury = () => {

  const carData = [
    {
      url: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Rolls Royce",
    },
    {
      url: "https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Maserati",
    },
    {
      url: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmdlJTIwcm92ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Range Rover",
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Porsche",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 text-center text-gray-800">
      {/* Heading */}
      <div className="mb-6 animate-fadeInDown">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
          Discover Luxury Cars
        </h1>
        <div className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-900 p-2 md:px-6 rounded-lg text-white text-lg md:text-xl">
          <span className="font-medium">Find your dream ride today</span>
        </div>
      </div>

      {/* Container for Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {carData.map((car, idx) => (
          <div
            key={idx}
            className="relative w-72 md:w-80 overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-white"
          >
            <Image
              src={car.url}
              alt={car.title}
              width={320}
              height={180}
              className="w-full h-auto object-cover aspect-video transition-transform transform hover:scale-110"
            />
            
            <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-60 text-white text-lg font-bold text-center transition-all hover:bg-opacity-80">
              {car.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Luxury;
