'use client';

import { useEffect, useState } from "react"

interface ContadorPersonalizadoProps {
    title: string;
}

export default function ContadorPersonalizado({ title }: ContadorPersonalizadoProps) {

    const [likes, setLikes] = useState<number>(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedLikes = localStorage.getItem(title);
        if (storedLikes) {
            setLikes(parseInt(storedLikes));
        }
    }, [title]);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem(title, String(likes));
        }
    }, [likes, title, mounted]);

    // Função para lidar com o clique
    const handleLike = (e: React.MouseEvent) => {
        // ISTO É O QUE IMPEDE A PÁGINA DE "IR ABAIXO"
        e.preventDefault();  // Impede o comportamento padrão
        e.stopPropagation(); // Impede que o clique suba para o Link pai
        
        setLikes(likes + 1);
    };

    if (!mounted) return <button className="px-4 py-2 bg-gray-300 rounded">...</button>;

    return (
        <button
            onClick={handleLike} // Usamos a nossa função protegida aqui
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition shadow-md flex gap-2 items-center text-sm font-medium z-10 relative"
        >
            {/* Texto alterado de "Gosto disto!" para "Like" */}
            <span>Like</span>
            
            <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {likes}
            </span>
        </button>
    );
}