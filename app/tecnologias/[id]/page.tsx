'use client';

import React from 'react';
import { useParams } from 'next/navigation'; 
import Link from 'next/link';
import tecnologias from '@/app/data/tecnologias.json'; 
import TecnologiaDetailsCard from '@/components/TecnologiaDetailsCard';

export default function TecnologiaDetalhePage() {
    //  Usar o hook useParams para capturar o ID da URL
    const params = useParams();
    
    // O params.id vem como string (ex: "0"), convertemos para número
    // O "Number()" é igual ao parseInt que usámos antes
    const index = Number(params.id);

    // Buscar a tecnologia no JSON usando o index
    const tecnologia = tecnologias[index];


    // Renderizar o componente
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            
            <div className="mb-8 w-full max-w-md">
                <Link href="/tecnologias" className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-2">
                    Voltar para a lista
                </Link>
            </div>

            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <TecnologiaDetailsCard 
                    title={tecnologia.title}
                    image={tecnologia.image}
                    description={tecnologia.description}
                    rating={tecnologia.rating}
                />
            </div>

        </div>
    );
}