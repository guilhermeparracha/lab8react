'use client';

import { useEffect, useState } from "react"
import { Product } from '@/models/interfaces'; 

interface FavoritoProps {
    
    produtoId: number; 
}

export default function Favoritos({ produtoId }: FavoritoProps) {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);
    
    const localStorageKey = `favorite_${produtoId}`; 

    useEffect(() => {
        setMounted(true);
        const storedFavorite = localStorage.getItem(localStorageKey); 
        
        if (storedFavorite === 'true') { 
            setIsFavorite(true);
        }
    }, [localStorageKey]);

   
    useEffect(() => {
        if (mounted) {
          
            localStorage.setItem(localStorageKey, String(isFavorite)); 

            if (isFavorite) {
                
                console.log(`Produto ${produtoId} marcado como favorito (localmente).`);
            } else {
              
                console.log(`Produto ${produtoId} removido dos favoritos (localmente).`);
            }
        }
    }, [isFavorite, localStorageKey, mounted, produtoId]);

    const handleToggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        
        setIsFavorite(prev => !prev); 
    };

    if (!mounted) return (
        <button 
            className="w-full text-center bg-gray-200 text-gray-500 px-3 py-2 rounded-md text-sm font-medium animate-pulse"
            disabled
        >
            Carregando...
        </button>
    );

  
    const icon = isFavorite ? '❤️' : '🤍';
    const buttonClass = isFavorite 
        ? "bg-red-600 hover:bg-red-700 text-white" 
        : "bg-gray-100 hover:bg-gray-200 text-gray-800";
    
    return (
        <button
            onClick={handleToggleFavorite} 
            className={`flex items-center justify-center gap-1 p-2 rounded-full transition-colors shadow-sm ${buttonClass}`}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
            <span className="text-xl leading-none">{icon}</span>
        </button>
    );
}