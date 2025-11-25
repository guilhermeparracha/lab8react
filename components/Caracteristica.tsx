import React from 'react';
import Link from 'next/link';

interface CaracteristicaProps {
  caracteristica: string;
}

const Caracteristica: React.FC<CaracteristicaProps> = ({ caracteristica }) => {
  const slug = caracteristica


  return (
    <Link href={`/caracteristicas/${slug}`} passHref>
      <div 
        className="block bg-white shadow-md hover:shadow-lg transition duration-300 
                   p-4 rounded-lg border-l-4 border-indigo-500 cursor-pointer w-full max-w-lg mx-auto mb-3"
      >
        <p className="text-lg font-medium text-gray-700 hover:text-indigo-600">
          {caracteristica}
        </p>
      </div>
    </Link>
  );
};

export default Caracteristica;