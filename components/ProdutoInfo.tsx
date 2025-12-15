import React from 'react';
import Image from 'next/image';
import { Product } from '@/models/interfaces';

interface ProdutoDetalheProps {
    produto: Product;
}

export default function ProdutoDetalhe({ produto }: ProdutoDetalheProps) {
    const imageUrl = produto.image; 

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 h-96 bg-gray-50 p-8">
                <Image
                    src={imageUrl}
                    alt={produto.title}
                    fill
                    className="object-contain mix-blend-multiply"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>

            <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
                    {produto.category}
                </span>
                
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    {produto.title}
                </h1>

                <p className="text-gray-600 leading-relaxed mb-6">
                    {produto.description}
                </p>

                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-6 h-6 ${i < Math.round(produto.rating.rate) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.54 4.739a1 1 0 00.95.691h4.97c.969 0 1.371 1.24.588 1.81l-4.02 2.926a1 1 0 00-.364 1.118l1.54 4.739c.3.921-.755 1.688-1.54 1.118l-4.02-2.926a1 1 0 00-1.175 0l-4.02 2.926c-.785.57-1.84-.197-1.54-1.118l1.54-4.739a1 1 0 00-.364-1.118L2.05 9.167c-.783-.57-.381-1.81.588-1.81h4.97a1 1 0 00.95-.691l1.54-4.739z" />
                            </svg>
                        ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">
                        ({produto.rating.count} avaliações)
                    </span>
                </div>

                <div className="text-4xl font-bold text-gray-900 mb-6">
                    {Number(produto.price).toFixed(2)} €
                </div>

                <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition transform hover:-translate-y-1">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
}