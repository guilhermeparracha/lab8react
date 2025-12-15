'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Product } from '@/models/interfaces';
import ProdutoCard from '@/components/ProdutoCard';

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Erro ao carregar os dados.');
    }
    return res.json();
};

export default function ProdutosPage() {
    const { data, error, isLoading } = useSWR<Product[]>(
        'https://deisishop.pythonanywhere.com/products/',
        fetcher
    );

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [sortOrder, setSortOrder] = useState('');
    
    const [cart, setCart] = useState<Product[]>([]);
    
    const [isStudent, setIsStudent] = useState(false);
    const [coupon, setCoupon] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const storedCart = localStorage.getItem('carrinho');
        if (storedCart) setCart(JSON.parse(storedCart));
    }, []);

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (produto: Product) => {
        setCart((prev) => [...prev, produto]);
    };

    const removeFromCart = (produto: Product) => {
        const index = cart.findIndex((item) => item.id === produto.id);
        if (index !== -1) {
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);
        }
    };

    const buyAll = () => {
        setMessage("A processar..."); 
        fetch("https://deisishop.pythonanywhere.com/buy", { 
            method: "POST",
            body: JSON.stringify({
                products: cart.map(product => product.id),
                name: "",
                student: isStudent, 
                coupon: coupon    
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            setCart([]);
            setCoupon('');
            setIsStudent(false);
            setMessage(`Compra realizada com sucesso!\nValor Total: ${response.totalCost}€`);
        })
        
    }

    const totalCusto = cart.reduce((total, item) => total + Number(item.price), 0);

    useEffect(() => {
        if (data) {
            let result = data.filter((produto) =>
                produto.title.toLowerCase().includes(search.toLowerCase())
            );

            if (sortOrder === 'price-asc') {
                result.sort((a, b) => Number(a.price) - Number(b.price));
            } else if (sortOrder === 'price-desc') {
                result.sort((a, b) => Number(b.price) - Number(a.price));
            } else if (sortOrder === 'name-asc') {
                result.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortOrder === 'name-desc') {
                result.sort((a, b) => b.title.localeCompare(a.title));
            }

            setFilteredData(result);
        }
    }, [search, data, sortOrder]);

    if (error) return <div>Erro ao carregar</div>;
    if (isLoading) return <div className="p-10 text-center">A carregar...</div>;

    return (
        <main className="min-h-screen bg-gray-50 p-6 md:p-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">A Nossa Coleção</h1>
                    
                    <div className="mb-8 flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Pesquisar produtos..."
                            className="w-full sm:w-auto flex-grow p-3 border border-gray-300 rounded-lg"
                        />
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg bg-white"
                        >
                            <option value="">Ordenar por...</option>
                            <option value="price-asc">Preço: Menor para Maior</option>
                            <option value="price-desc">Preço: Maior para Menor</option>
                            <option value="name-asc">Nome: A a Z</option>
                            <option value="name-desc">Nome: Z a A</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredData.map((produto) => (
                            <ProdutoCard key={produto.id} produto={produto} onAddToCart={addToCart} />
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/3 w-full">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 sticky top-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                            Carrinho ({cart.length})
                        </h2>

                        {cart.length === 0 ? (
                            <p className="text-gray-500 italic">O carrinho está vazio.</p>
                        ) : (
                            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto mb-4">
                                {cart.map((produto, index) => (
                                    <div key={`${produto.id}-${index}`} className="flex-shrink-0">
                                        <ProdutoCard produto={produto} onRemoveFromCart={removeFromCart} />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-6 pt-4 border-t border-gray-100 space-y-4">
                            
                            <div className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    id="student"
                                    checked={isStudent}
                                    onChange={(e) => setIsStudent(e.target.checked)}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="student" className="text-gray-700 font-medium">
                                    Sou estudante DEISI
                                </label>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-600 font-medium">Cupão de Desconto:</label>
                                <input
                                    type="text"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    placeholder="Insira o seu código"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="flex justify-between items-center text-xl font-bold text-gray-900 mt-4">
                                <span>Total (Estimado):</span>
                                <span>{totalCusto.toFixed(2)} €</span>
                            </div>

                            <button 
                                onClick={buyAll} 
                                disabled={cart.length === 0}
                                className={`w-full py-3 rounded-lg font-bold transition-colors shadow-md ${
                                    cart.length === 0 
                                    ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
                                    : 'bg-green-600 text-white hover:bg-green-700'
                                }`}
                            >
                                Comprar Agora
                            </button>

                            {message && (
                                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg whitespace-pre-line text-center">
                                    {message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}