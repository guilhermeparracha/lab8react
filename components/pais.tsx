
import React from 'react';

interface Country {
    name: {
        common: string;
    };
    area: number;
    population: number;
}

interface PaisCardProps {
    name: string;
    area: number;
    population: number;
}

const API_URL = 'https://restcountries.com/v3.1/independent?status=true&fields=name,area,population';


async function getCountries(): Promise<Country[]> {
 
    const response = await fetch(API_URL); 
    const data: Country[] = await response.json();
    return data;
}

export default async function PaisList() {
    
    const countries = await getCountries();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">Países Independentes ({countries.length})</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries
                    .sort((a, b) => b.population - a.population) 
                    .map((country) => (
                        <PaisCard 
                            key={country.name.common}
                            name={country.name.common}
                            area={country.area}
                            population={country.population}
                        />
                    ))}
            </div>
        </div>
    );
}
function PaisCard({ name, area, population }: PaisCardProps) {
    const formatNumber = (num: number): string => {
        return new Intl.NumberFormat('pt-PT', { maximumFractionDigits: 0 }).format(num);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{name}</h2>
            
            <div className="mt-auto pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold text-blue-600">População:</span> {formatNumber(population)}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold text-blue-600">Área:</span> {formatNumber(area)} km²
                </p>
            </div>
        </div>
    );
}