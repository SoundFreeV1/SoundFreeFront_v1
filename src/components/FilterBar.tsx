import React from "react";

interface FilterBarProps {
  filtro: string;
  setFiltro: (filtro: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filtro, setFiltro }) => {
  const categorias = ['all', 'focus', 'sleep', 'protect'];

  return (
    <div className="flex flex-wrap gap-3">
      {categorias.map((cat) => (
        <button
          key={cat}
          className={`filtro-boton px-4 py-1 rounded-full text-sm font-medium ${
            filtro === cat ? 'bg-[#101418] text-white' : 'bg-[#d4dbe2]'
          }`}
          onClick={() => setFiltro(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};
