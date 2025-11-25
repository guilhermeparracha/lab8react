import React from 'react';
import Caracteristica from '@/components/Caracteristica';

export default function CaracteristicasPage() {
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
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-800">
                Características do React e Next.js
            </h2>
            
            <div className="flex flex-col items-center">
                {caracteristicas.map((item, i) => (
                    <Caracteristica key={i} caracteristica={item} />
                ))}
            </div>
        </div>
    );
}