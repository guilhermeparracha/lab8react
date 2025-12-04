import React from 'react';
// 1. Importar o Link do Next.js para navegação
import Link from 'next/link';

// 2. Importar o JSON de dados
import tecnologias from '@/app/data/tecnologias.json';

// 3. IMPORTANTE: Importar o componente que criámos (ajusta o caminho se necessário)
import TecnologiaCard from '@/components/MagiaDoJSX/TecnologiaCard';

export default function TecnologiasPage() {

    // Verificação de segurança: Se o JSON não carregou, avisa.
    if (!tecnologias || tecnologias.length === 0) {
        return <div className="p-10 text-center">Nenhuma tecnologia encontrada no JSON.</div>;
    }

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-indigo-800">
                Tecnologias Exploradas 🚀
            </h2>

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                
                {tecnologias.map((tecnologia, index) => (
                    // Envolvemos o Card num Link para ir para a página de detalhes
                    // Nota: Assumo que usas o índice como ID, ou adiciona um ID ao teu JSON
                    <Link key={index} href={`/tecnologias/${index}`}>
                        
                        {/* AQUI ESTÁ A MUDANÇA: Usamos o Componente, não HTML solto */}
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