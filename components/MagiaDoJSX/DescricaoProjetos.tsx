import React from 'react';
import Projeto from './Projeto';

const GITHUB_PAGES_HOMEPAGE = "https://guilhermeparracha.github.io/"; 

const DescricaoProjetos: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h3 className="text-2xl font-bold mb-4 text-indigo-700 border-b pb-2">
        Projetos
      </h3>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        Ao longo desta disciplina, tive a oportunidade de aplicar os conhecimentos de desenvolvimento web
        front-end e back-end em vários projetos práticos. Estes exercícios permitiram-me consolidar
        as minhas habilidades em tecnologias essenciais como React, Next.js, Tailwind CSS e integração de APIs.
        Para uma visão completa e atualizada de todos os meus trabalhos, incluindo os mais recentes,
        visite a minha homepage com os labs que trabalhei:
        <br />
        <a 
          href={GITHUB_PAGES_HOMEPAGE} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 font-medium underline mt-2 inline-block"
        >
          {GITHUB_PAGES_HOMEPAGE} (Abrir em nova aba)
        </a>
      </p>

      
    
    </div>
  );
};

export default DescricaoProjetos;