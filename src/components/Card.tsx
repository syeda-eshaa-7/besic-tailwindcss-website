// import React from 'react';

// interface CardProps {
//   image: string;
//   make: string;
// }

// const Card: React.FC<CardProps> = ({ image, make }) => {
//   return (
//     <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 overflow-hidden">
//       <img src={image} alt={make} className="w-full h-56 object-cover" />
//       <div className="p-4 text-center">
//         <p className="text-lg font-bold text-gray-800">{make}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  make: string;
}

const Card: React.FC<CardProps> = ({ image, make }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={make}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-lg font-bold text-gray-800">{make}</p>
      </div>
    </div>
  );
};

export default Card;

