import React from 'react';
import Image from 'next/image';
import ContadorPersonalizado from '../ContadorPersonalizado';

interface TecnologiaCardProps {
    title: string;
    image: string;
}

const TecnologiaCard: React.FC<TecnologiaCardProps> = ({ title, image }) => {
    return (
        <div 
            className="w-48 h-auto flex flex-col items-center justify-center p-4 
                       bg-white shadow-xl rounded-2xl border border-gray-100 
                       hover:shadow-indigo-400/50 transition duration-300 transform hover:scale-105 gap-3"
        >
            <Image
                src={`/tecnologias/${image}`}
                alt={`Logotipo de ${title}`}
                width={80} 
                height={80}
                className="object-contain"
            />
            
            <h3 className="text-lg font-bold text-gray-800 text-center">
                {title}
            </h3>

            
            <div className="mt-1">
                <ContadorPersonalizado title={title} />
            </div>
        </div>
    );
};

export default TecnologiaCard;