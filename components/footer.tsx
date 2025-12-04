// components/Footer.tsx
'use client'; // Isto é obrigatório para usar useEffect e useState

import React, { useEffect, useState } from 'react';

export default function Footer() {
  // Começamos sem valor para evitar erro de hidratação (diferença entre servidor e cliente)
  const [hora, setHora] = useState<string | null>(null);

  useEffect(() => {
    // Define a hora inicial logo que carrega no cliente
    setHora(new Date().toLocaleTimeString());

    const id = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-10 text-center text-gray-600">
      <p>DIW {new Date().getFullYear()}</p>
      {/* Só mostra a hora quando ela estiver carregada */}
      <p suppressHydrationWarning>
        {hora ? hora : 'Carregando...'}
      </p>
    </footer>
  );
}