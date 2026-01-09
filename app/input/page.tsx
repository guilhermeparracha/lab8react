'use client';

import React, { useState } from 'react';

// Definir o tipo de dados para uma Tarefa
type Tarefa = {
  id: number;
  texto: string;
  categoria: string;
};

// Lista de tecnologias para o seletor
const categorias = ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js'];

export default function PaginaInput() {
  // --- ESTADO 1: Input Espelho ---
  const [textoEspelho, setTextoEspelho] = useState('');

  // --- ESTADO 2 e 3: Lista de Tarefas ---
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [inputTarefa, setInputTarefa] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0]);
  const [editandoId, setEditandoId] = useState<number | null>(null);

  // --- FUNÇÕES DA LISTA ---

  // Adicionar ou Atualizar Tarefa
  const salvarTarefa = () => {
    if (!inputTarefa.trim()) return; // Não aceita vazio

    if (editandoId !== null) {
      // MODO EDIÇÃO: Atualiza a tarefa existente
      setTarefas((prev) =>
        prev.map((t) =>
          t.id === editandoId
            ? { ...t, texto: inputTarefa, categoria: categoriaSelecionada }
            : t
        )
      );
      setEditandoId(null); // Sai do modo edição
    } else {
      // MODO CRIAÇÃO: Adiciona nova tarefa
      const novaTarefa: Tarefa = {
        id: Date.now(), // ID único baseado no tempo
        texto: inputTarefa,
        categoria: categoriaSelecionada,
      };
      setTarefas((prev) => [...prev, novaTarefa]);
    }

    // Limpar o input
    setInputTarefa('');
  };

  // Apagar Tarefa
  const apagarTarefa = (id: number) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
    // Se estivéssemos a editar esta tarefa, cancelar a edição
    if (editandoId === id) {
      setEditandoId(null);
      setInputTarefa('');
    }
  };

  // Preparar para Editar
  const iniciarEdicao = (tarefa: Tarefa) => {
    setEditandoId(tarefa.id);
    setInputTarefa(tarefa.texto);
    setCategoriaSelecionada(tarefa.categoria);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8 font-sans">
      
      {/* --- SECÇÃO 1: INPUT COM ESPELHO --- */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-bold mb-4 text-gray-800">1. Espelho de Texto</h2>
        <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-black">Digite algo:</label>
            <input
            type="text"
            value={textoEspelho}
            onChange={(e) => setTextoEspelho(e.target.value)}
            placeholder="Escreve aqui..."
            className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            
            {/* O Texto aparece aqui em baixo */}
            <div className="mt-2 p-3 bg-white border border-dashed border-gray-400 rounded text-gray-600 min-h-[50px]">
            {textoEspelho || <span className="text-gray-400 italic">O texto aparecerá aqui...</span>}
            </div>
        </div>
      </section>

      {/* --- SECÇÃO 2 & 3: SELETOR E LISTA DE TAREFAS --- */}
      <section className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-bold mb-4 text-gray-800">2. Gestor de Tarefas</h2>
        
        {/* Controles de Inserção */}
        <div className="flex flex-col md:flex-row gap-3 mb-6 text-black">
            <input
                type="text"
                value={inputTarefa}
                onChange={(e) => setInputTarefa(e.target.value)}
                placeholder="Nome da tarefa..."
                className="flex-1 p-2 border rounded border-gray-300"
            />
            
            {/* O SELETOR PEDIDO */}
            <select
                value={categoriaSelecionada}
                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                className="p-2 border rounded border-gray-300 bg-white"
            >
                {categorias.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            <button
                onClick={salvarTarefa}
                className={`px-4 py-2 text-white rounded font-medium transition-colors ${
                    editandoId ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {editandoId ? 'Atualizar' : 'Inserir'}
            </button>
        </div>

        {/* Lista de Itens */}
        <div className="space-y-3">
            {tarefas.length === 0 && (
                <p className="text-center text-gray-500">Nenhuma tarefa criada.</p>
            )}

            {tarefas.map((tarefa) => (
                <div key={tarefa.id} className="flex items-center justify-between p-3 bg-gray-50 rounded border hover:shadow-sm transition-shadow">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wide text-blue-600 bg-blue-100 px-2 py-1 rounded mr-2">
                            {tarefa.categoria}
                        </span>
                        <span className="text-gray-800">{tarefa.texto}</span>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => iniciarEdicao(tarefa)}
                            className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => apagarTarefa(tarefa.id)}
                            className="text-sm px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                        >
                            Apagar
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}