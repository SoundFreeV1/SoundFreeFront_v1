import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export default function Producto() {
  const { slug } = useParams();
  const [producto, setProducto] = useState<any>(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const { data } = await supabase
        .from("productos")
        .select("*")
        .eq("slug", slug)
        .single();

      setProducto(data);
    };

    fetchProducto();
  }, [slug]);

  if (!producto) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{producto.nombre}</h1>
      <img src={producto.imagen_url} className="w-64 my-4" />
      <p>{producto.descripcion}</p>
    </div>
  );
}
