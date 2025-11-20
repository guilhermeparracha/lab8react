import React from 'react';
import Image from 'next/image';

// Importa o JSON diretamente.
// O TypeScript e o Next.js/Webpack gerenciam a conversão para objeto JS.
import tecnologias from '@/app/data/tecnologias.json';

// Define a interface para tipagem (melhora a organização e evita erros)
interface Tecnologia {
    title: string;
    image: string;
    description: string;
    rating: number;
}

export default function TecnologiasPage() {

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-indigo-800">
                Tecnologias Exploradas 🚀
            </h2>

            {/* Grid Container para os Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                
                {(tecnologias as Tecnologia[]).map((tecnologia, index) => (
                    
                    // Card da Tecnologia
                    <div 
                        key={index}
                        className="bg-white rounded-xl shadow-lg border-t-4 border-indigo-500 overflow-hidden 
                                   hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                        {/* Imagem e Título */}
                        <div className="p-5 flex flex-col items-center justify-center h-36 border-b border-gray-100">
                            <Image
                                src={`/tecnologias/${tecnologia.image}`} 
                                alt={`Logotipo de ${tecnologia.title}`}
                                width={80} // Tamanho da imagem
                                height={80}
                                className="object-contain mb-3"
                            />
                            <h3 className="text-lg font-bold text-gray-900 text-center">
                                {tecnologia.title}
                            </h3>
                        </div>

                        {/* Descrição e Rating */}
                        <div className="p-5">
                            <p className="text-sm text-gray-600 mb-4 h-14 line-clamp-3">
                                {tecnologia.description}
                            </p>
                            
                            {/* Rating */}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <span className="text-sm font-semibold text-gray-500">
                                    Rating Pessoal:
                                </span>
                                
                                <div className="flex">
                                    {/* Mapeia 5 estrelas */}
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ml-0.5 ${
                                                i < tecnologia.rating
                                                    ? 'text-yellow-400' // Estrela preenchida
                                                    : 'text-gray-300' // Estrela vazia
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.54 4.739a1 1 0 00.95.691h4.97c.969 0 1.371 1.24.588 1.81l-4.02 2.926a1 1 0 00-.364 1.118l1.54 4.739c.3.921-.755 1.688-1.54 1.118l-4.02-2.926a1 1 0 00-1.175 0l-4.02 2.926c-.785.57-1.84-.197-1.54-1.118l1.54-4.739a1 1 0 00-.364-1.118L2.05 9.167c-.783-.57-.381-1.81.588-1.81h4.97a1 1 0 00.95-.691l1.54-4.739z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}