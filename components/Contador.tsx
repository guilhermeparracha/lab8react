
'use client'

import React, { useEffect } from 'react'

import { useState } from 'react';
import { text } from 'stream/consumers';

export default function Contador() {

const [valor, setValor] = useState<number>(0);
const [historico, setHistorico] = useState<number[]>([]);

useEffect(()=> {
    const savedValor = localStorage.getItem("contador_valor");
    const savedHist = localStorage.getItem("contador_historico");

    if (savedValor) {
        setValor(Number(savedValor));
    }

    if (savedHist){
        setHistorico(JSON.parse(savedHist));
    }
}, [])

useEffect(() => {
    localStorage.setItem("contador_valor", String(valor));
    localStorage.setItem("contador_historico", JSON.stringify(historico));
},[valor , historico])

const atualizarValor = (novo: number) => {
    if (novo < 0 || novo > 10) {
        return;
    }

    setValor(novo);
    setHistorico((prev) => [...prev, novo]);

};

const incrementar = () => atualizarValor(valor + 1);
const decrementar = () => atualizarValor(valor - 1);
const reset = () => atualizarValor(0);

const getTailwindColor = () => {
    if(valor >= 0 && valor<= 3){
        return 'text-red-600';
    }
    if(valor >= 4 && valor <= 7){
        return 'text-yellow-600'
    }
    return 'text-green-600'
}



return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1 className={getTailwindColor()}>Contador: {valor}</h1>            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={decrementar}>- Decrementar</button>
                <button onClick={reset}>Reset</button>
                <button onClick={incrementar}>+ Incrementar</button>
            </div>

            <h3>Histórico:</h3>
            <ul>
                {historico.map((val, index) => (
                    <li key={index}>Alterado para: {val}</li>
                ))}
            </ul>
        </div>
    );
}


