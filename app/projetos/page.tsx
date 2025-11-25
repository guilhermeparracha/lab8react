import React from "react";
import DescricaoProjetos from "@/components/MagiaDoJSX/DescricaoProjetos";

export default function ProjetosPage() {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900">
        Meus Projetos
      </h1>
      
      <DescricaoProjetos />
      
      {/* Pode adicionar mais conteúdo aqui, se necessário */}
    </div>
  );
}