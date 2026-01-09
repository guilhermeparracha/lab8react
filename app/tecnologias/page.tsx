import React from 'react';
import Link from 'next/link';

import tecnologias from '@/app/data/tecnologias.json';

import TecnologiaCard from '@/components/MagiaDoJSX/TecnologiaCard';

export default function TecnologiasPage() {

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-indigo-800">
                Tecnologias Exploradas 🚀
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                
                {tecnologias.map((tecnologia, index) => (
                    
                    <Link key={index} href={`/tecnologias/${index}`}>
                        
                        <TecnologiaCard 
                            title={tecnologia.title} 
                            image={tecnologia.image} 
                        />

                    </Link>
                ))}

            </div>
        </div>
    );
}