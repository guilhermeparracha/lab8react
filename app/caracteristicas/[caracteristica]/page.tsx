'use client'; 

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function CaracteristicaPage() {
    // 1. Capturar o parâmetro da URL
    const params = useParams();
    const router = useRouter();

    // 2. O texto vem "codificado" (com %20 em vez de espaços). 
    // O decodeURIComponent resolve isso para texto normal.
    const textoDecodificado = decodeURIComponent(params.caracteristica as string);

    return (
        // "Disponha a característica no centro da página usando Tailwind e flex"
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            
            <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl w-full text-center border-t-8 border-indigo-600">
                
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
                    Detalhe da Característica
                </h2>

                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 leading-relaxed">
                    "{textoDecodificado}"
                </h1>

                {/* Botão para voltar */}
                <button 
                    onClick={() => router.back()} // Podes usar router.back() ou Link href="/caracteristicas"
                    className="
                        px-8 py-3 bg-indigo-600 text-white font-bold rounded-full 
                        hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg
                    "
                >
                    Voltar às Características
                </button>

            </div>
        </div>
    );
}