import React from 'react';
import Image from 'next/image';
// 1. Importar o Contador
import ContadorPersonalizado from '../ContadorPersonalizado';

interface TecnologiaCardProps {
    title: string;
    image: string;
}

const TecnologiaCard: React.FC<TecnologiaCardProps> = ({ title, image }) => {
    return (
        <div 
            // Mudei 'h-48' para 'h-auto' e adicionei 'gap-3' para dar espaço ao botão
            className="w-48 h-auto flex flex-col items-center justify-center p-4 
                       bg-white shadow-xl rounded-2xl border border-gray-100 
                       hover:shadow-indigo-400/50 transition duration-300 transform hover:scale-105 gap-3"
        >
            {/* Imagem */}
            <Image
                src={`/tecnologias/${image}`}
                alt={`Logotipo de ${title}`}
                width={80} 
                height={80}
                className="object-contain"
            />
            
            {/* Título */}
            <h3 className="text-lg font-bold text-gray-800 text-center">
                {title}
            </h3>

            {/* 2. Inserir o Contador Personalizado */}
            {/* Passamos o title para ele saber onde guardar os likes no localStorage */}
            <div className="mt-1">
                <ContadorPersonalizado title={title} />
            </div>
        </div>
    );
};

export default TecnologiaCard;