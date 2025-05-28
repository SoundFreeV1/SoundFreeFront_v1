import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        .from("Productos")
        .select("*")
        .eq("slug", slug)
        .single();

      setProducto(data);
    };

    fetchProducto();
  }, [slug]);

  if (!producto) return <p className="p-6">Cargando...</p>;

  return (
    <div className="bg-gray-50 text-[#101418]" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          Home / <span className="text-black"> {producto.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
        {(producto.image_url || []).map((url: string, i: number) => (
    <img
      key={i}
      src={url}
      alt={`${producto.name} ${i + 1}`}
      className="rounded-xl w-full h-auto"
    />
  ))}
</div>


          <div>
            <h1 className="text-3xl font-bold mb-4">{producto.name}</h1>
            <p className="text-[#5c738a] mb-6">{producto.description}</p>

            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <table className="w-full text-sm mb-6">
              <tbody>
                <tr className="border-b"><td className="py-2 font-medium">Noise Reduction</td><td>Up to 32 dB</td></tr>
                <tr className="border-b"><td className="py-2 font-medium">Comfort</td><td>Ultra-soft silicone</td></tr>
                <tr className="border-b"><td className="py-2 font-medium">Material</td><td>Medical-grade silicone</td></tr>
                <tr className="border-b"><td className="py-2 font-medium">Sizes</td><td>Small, Medium, Large</td></tr>
              </tbody>
            </table>

            <p className="text-xl font-bold mb-2">${producto.price}</p>

            <select className="border px-4 py-2 rounded w-full mb-4">
              <option>Select Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <button className="bg-black text-white w-full py-3 rounded font-semibold">
              Add to Cart
            </button>

            <a
  href={`https://wa.me/51944649717?text=Hola%20SoundWell,%20quiero%20más%20información%20sobre%20el%20producto%20%22${encodeURIComponent(producto.name)}%22`}
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-3 text-center border border-green-600 text-green-700 font-semibold py-3 rounded hover:bg-green-50 transition"
>
  Contactar por WhatsApp
</a>

          </div>
        </div>







        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold">4.8</span>
            <div className="flex gap-1 text-yellow-500 text-xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < 4 ? "★" : "☆"}</span>
              ))}
            </div>
            <div className="text-sm text-gray-500">125 reviews</div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-semibold">Sophia Bennett</p>
              <p className="text-sm text-gray-500">2 months ago</p>
              <div className="text-yellow-500">★★★★★</div>
              <p className="text-sm mt-2">
                These earplugs are a game-changer! I’ve struggled with sleep for years due to my partner’s snoring...
              </p>
            </div>
            <div>
              <p className="font-semibold">Liam Carter</p>
              <p className="text-sm text-gray-500">3 months ago</p>
              <div className="text-yellow-500">★★★★☆</div>
              <p className="text-sm mt-2">
                Good earplugs, they do a decent job of reducing noise. I still hear some sounds...
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
