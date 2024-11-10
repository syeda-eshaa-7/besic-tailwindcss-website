import React from 'react';
import Card from './Card';

interface CardProps {
  image: string;
  make: string;
}

const Find: React.FC = () => {
  const cars: CardProps[] = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      make: 'Audi',
    },
    {
      image: 'https://images.unsplash.com/photo-1532751203793-812308a10d8e?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      make: 'Audi',
    },
    {
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      make: 'Audi',
    },
    {
      image: 'https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      make: 'Audi',
    },
  ];

  return (
    <div className="p-8 bg-gray-100 text-gray-800 text-center">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 animate-fadeInDown">Find your drive</h1>
        <div className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-900 p-2 rounded-lg">
          <p className="text-white text-lg font-medium animate-fadeInUp">Explore the world&ldquo;s largest car sharing marketplace</p>
        </div>
      </div>
      {/* Centering the cards using flexbox on smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 justify-items-center">
        {cars.map((car, index) => (
          <Card key={index} image={car.image} make={car.make} />
        ))}
      </div>
    </div>
  );
};

export default Find;
