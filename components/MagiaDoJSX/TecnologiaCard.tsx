import React from 'react';
import Image from 'next/image';

interface TecnologiaCardProps {
    title: string;
    image: string;
}

const TecnologiaCard: React.FC<TecnologiaCardProps> = ({ title, image }) => {
    return (
        <div 
            className="w-48 h-48 flex flex-col items-center justify-center p-4 
                       bg-white shadow-xl rounded-2xl border border-gray-100 
                       hover:shadow-indigo-400/50 transition duration-300 transform hover:scale-105"
        >
            {/* Imagem */}
            <Image
                src={`/tecnologias/${image}`}
                alt={`Logotipo de ${title}`}
                width={80} 
                height={80}
                className="object-contain mb-3"
            />
            
            {/* Título */}
            <h3 className="text-lg font-bold text-gray-800 text-center mt-2">
                {title}
            </h3>
        </div>
    );
};

export default TecnologiaCard;