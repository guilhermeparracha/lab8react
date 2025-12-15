'use client'; 

import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [hora, setHora] = useState<string | null>(null);

  useEffect(() => {
    setHora(new Date().toLocaleTimeString());

    const id = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-10 text-center text-gray-600">
      <p>DIW {new Date().getFullYear()}</p>
      <p suppressHydrationWarning>
        {hora ? hora : 'Carregando...'}
      </p>
    </footer>
  );
}