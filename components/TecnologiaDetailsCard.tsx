import React from 'react';
import Image from 'next/image';

// Define a interface para a estrutura completa de uma Tecnologia
interface Tecnologia {
    title: string;
    image: string;
    description: string;
    rating: number;
}

interface TecnologiaDetailsCardProps {
    tecnologia: Tecnologia;
}

// Componente de Card Detalhado
const TecnologiaDetailsCard: React.FC<TecnologiaDetailsCardProps> = ({ tecnologia }) => {
    // Função para renderizar as estrelas do rating
    const renderRating = (currentRating: number) => {
        return (
            <div className="flex items-center space-x-0.5">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${
                            i < currentRating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.54 4.739a1 1 0 00.95.691h4.97c.969 0 1.371 1.24.588 1.81l-4.02 2.926a1 1 0 00-.364 1.118l1.54 4.739c.3.921-.755 1.688-1.54 1.118l-4.02-2.926a1 1 0 00-1.175 0l-4.02 2.926c-.785.57-1.84-.197-1.54-1.118l1.54-4.739a1 1 0 00-.364-1.118L2.05 9.167c-.783-.57-.381-1.81.588-1.81h4.97a1 1 0 00.95-.691l1.54-4.739z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white shadow-2xl rounded-xl">
            {/* Imagem */}
            <div className="flex justify-center mb-6">
                <Image
                    src={`/tecnologias/${tecnologia.image}`}
                    alt={`Logotipo de ${tecnologia.title}`}
                    width={150} 
                    height={150}
                    className="object-contain"
                />
            </div>

            {/* Título */}
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4 border-b pb-2">
                {tecnologia.title}
            </h1>

            {/* Descrição */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6 border-b pb-4">
                {tecnologia.description}
            </p>

            {/* Rating */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <span className="text-lg font-semibold text-gray-700">
                    Rating Pessoal:
                </span>
                {renderRating(tecnologia.rating)}
            </div>
        </div>
    );
};

export default TecnologiaDetailsCard;