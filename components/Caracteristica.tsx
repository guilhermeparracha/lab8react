import React from 'react';
import Link from 'next/link';


interface CaracteristicaProps {
    caracteristica: string;
}

const Caracteristica: React.FC<CaracteristicaProps> = ({ caracteristica }) => {
    return (
        // O Link envolve o componente e aponta para a rota dinâmica usando o próprio texto
        <Link href={`/caracteristicas/${caracteristica}`} className="w-full max-w-2xl mb-4">
            <div 
                className="
                    bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500 
                    hover:shadow-md hover:bg-indigo-50 transition duration-300 cursor-pointer
                    flex justify-between items-center
                "
            >
                <span className="text-lg font-medium text-gray-700">
                    {caracteristica}
                </span>
               
            </div>
        </Link>
    );
};

export default Caracteristica;