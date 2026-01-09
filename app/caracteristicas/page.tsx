import React from 'react';
import Caracteristica from '@/components/Caracteristica'; 

export default function Page() {
    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
                Características do React e Next.js
            </h2>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {caracteristicas.map((item, i) => {
                    
                    return (
                        <Caracteristica 
                            key={i} 
                            caracteristica={item} 
                        />
                    );
                })}
            </div>
        </div>
    );
}