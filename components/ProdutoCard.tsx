import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/models/interfaces';
import Favoritos from './Favoritos';

interface ProdutoCardProps {
    produto: Product;
    onAddToCart?: (produto: Product) => void;
    onRemoveFromCart?: (produto: Product) => void;
}

export default function ProdutoCard({ produto, onAddToCart, onRemoveFromCart }: ProdutoCardProps) {
    const imagePrefix = 'https://deisishop.pythonanywhere.com';
    const imageUrl = `${imagePrefix}${produto.image}`;

    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 h-full overflow-hidden">
            <div className="relative w-full h-48 bg-gray-50">
                <Image
                    src={imageUrl}
                    alt={produto.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                    <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-1">
                        {produto.title}
                    </h2>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">
                        {produto.category}
                    </span>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                    <span className="text-xl font-extrabold text-blue-600 mb-2">
                         {Number(produto.price).toFixed(2)} €
                    </span>
                    
                    {onAddToCart && (
                        <button 
                            onClick={() => onAddToCart(produto)}
                            className="w-full bg-black text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Adicionar ao Carrinho
                        </button>
                    )}

                    {onRemoveFromCart && (
                        <button 
                            onClick={() => onRemoveFromCart(produto)}
                            className="w-full bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                        >
                            Remover
                        </button>
                    )}
                        
                    <Link href={`/produtos/${produto.id}`} className="w-full">
                        <button className="w-full bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                            + Info
                        </button>
                    </Link>
                </div>
                <div className="mt-1">
                        <Favoritos title= 'favorito'/>
                            </div>
            </div>
        </div>
    );
}