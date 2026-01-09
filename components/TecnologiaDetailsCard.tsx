import React from 'react';
import Image from 'next/image';

interface TecnologiaCardProps {
    title: string;
    image: string;
    description: string;
    rating: number;
}

const TecnologiaDetailsCard: React.FC<TecnologiaCardProps> = ({ title, image, description, rating }) => {
    return (
        <div 
            className="
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

            <h4 className='text-black'>{description}</h4>

            <h5 className='text-black'>{rating}⭐️</h5>

        
        </div>
    );
};

export default TecnologiaDetailsCard;