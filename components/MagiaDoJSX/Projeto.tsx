import React from 'react';

// Define a interface para as propriedades (props) do componente Projeto
interface ProjetoProps {
  nome: string;
  url: string;
}

const Projeto: React.FC<ProjetoProps> = ({ nome, url }) => {
  return (
    <p className="mb-2 text-lg text-gray-700">
      Criei o projeto de <span className="font-semibold text-indigo-600">{nome}</span>, que pode ser acedido através do seguinte link:{' '}
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:text-blue-700 underline transition duration-150"
      >
        {url}
      </a>
    </p>
  );
};

export default Projeto;