'use client';

import React from 'react';
import useSWR from 'swr';
import { useParams, useRouter } from 'next/navigation'; 
import { Product } from '@/models/interfaces';
import ProdutoDetalhe from '@/components/ProdutoInfo';

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Falha ao carregar produto');
    }
    return res.json();
};

export default function ProdutoPage() {
    const params = useParams();
    const router = useRouter(); 
    const id = params.id;

    const { data: produto, error, isLoading } = useSWR<Product>(
        id ? `https://deisishop.pythonanywhere.com/products/${id}` : null,
        fetcher
    );

    if (isLoading) return (
        <div className="flex justify-center items-center min-h-screen">
             <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        </div>
    );

    if (error || !produto) return (
        <div className="p-10 text-center text-red-500">
            Produto não encontrado.
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
            <div className="max-w-6xl mx-auto">
                
                <button 
                    onClick={() => router.back()} 
                    className="mb-6 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Voltar à lista
                </button>

                <ProdutoDetalhe produto={produto} />
                
            </div>
        </div>
    );
}