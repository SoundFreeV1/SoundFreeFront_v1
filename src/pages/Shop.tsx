import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ProductCard } from "../components/ProductCard";
import { FilterBar } from "../components/FilterBar";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

interface Producto {
  id: number;
  name: string;
  description: string;
  slug: string;
  image_url: string;
  category: string;
}


export default function Shop() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtro, setFiltro] = useState<string>("all");

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        let query = supabase.from("Productos").select("*");
        if (filtro !== "all") {
          query = query.ilike("category", `%${filtro}%`);
        }
  
        const { data, error } = await query;
        if (error) throw error;
  
        setProductos(data || []);
      } catch (err) {
        console.error(" Error al cargar productos:", err);
      }
    };
  
    cargarProductos();
  }, [filtro]);
  

  return (
    <div
      className="bg-gray-50 text-[#101418]"
      style={{ fontFamily: "Manrope, 'Noto Sans', sans-serif" }}
    >
      <header className="flex items-center justify-between border-b border-[#eaedf1] px-10 py-3">
        <a
          href="/"
          className="flex items-center gap-4 hover:opacity-70 transition"
        >
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em]">SoundWell</h2>
        </a>

        <div className="flex gap-8 items-center">
          <div className="flex gap-9">
            <a className="text-sm font-medium" href="/shop">
              Shop
            </a>
            <a className="text-sm font-medium" href="#">
              Learn
            </a>
            <a className="text-sm font-medium" href="#">
              Support
            </a>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full h-10 px-2.5 bg-[#eaedf1] flex items-center">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06..." />
              </svg>
            </button>
            <button className="rounded-full h-10 px-2.5 bg-[#eaedf1] flex items-center">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0..." />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
          <FilterBar filtro={filtro} setFiltro={setFiltro} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productos.map((p) => (
            <ProductCard
            key={p.id}
            name={p.name}
            description={p.description}
            image_url={p.image_url}
            slug={p.slug}
          />
          
          ))}
        </div>
      </div>
    </div>
  );
}
