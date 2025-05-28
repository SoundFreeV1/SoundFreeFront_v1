import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { createClient } from "@supabase/supabase-js";
import { ShieldCheck, Moon, Headphones } from "lucide-react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

interface Producto {
  id: number;
  name: string;
  description: string;
  slug: string;
  image_url: string[];
  category: string;
  featured: boolean;
  price: number;
}


const Home: React.FC = () => {
  const [destacados, setDestacados] = useState<Producto[]>([]);
 
 
  useEffect(() => {
    const cargarDestacados = async () => {
      const { data, error } = await supabase
        .from("Productos")
        .select("*")
        .eq("featured", true)
        .limit(3);
  
      if (!error && data) {
        setDestacados(data);
      } else {
        console.error("Error cargando productos destacados:", error);
      }
    };
    cargarDestacados();
  }, []);
  

  return (
    <div
      className="relative flex min-h-screen flex-col bg-gray-50 overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <section className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfebnEdURE_TiLT8k3lvwiCKsD2995C8kRLQymAUsI6aMEtlVp0Odaeb50eGJ4ey0HSx2BafejeLoZpir4DBhs1xYGr7ABrR6QRt2VJEz6r1MRsxNyDfSz2o0C_QwWEez_mCKKVr5-u6NBcxKAtRmaBjhlM2b6ghdkEOL16yChUXXTW7x0nDYgPdMXTVFduFI3ssEzfp7xn3XfE_XfytQpvduAHIZrTtTTWb2GLFYmdQDpxfVJisw1pAmCiwHaK2noC_OEz9cKMjI')",
                  }}
                >
                  <div className="flex flex-col gap-2 text-left text-white">
                    <h1 className="text-4xl @[480px]:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Find your focus
                    </h1>
                    <h2 className="text-sm @[480px]:text-base font-normal leading-normal">
                      SoundOff earplugs are designed to help you focus, sleep, and protect your hearing in any environment.
                    </h2>
                  </div>
                  <Link
                    to="/shop"
                    className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 mt-4 @[480px]:h-12 @[480px]:px-5 bg-[#699bcd] text-[#101418] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
        <div className="max-w-[960px] mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {destacados.map((producto) => (
                <ProductCard key={producto.id} {...producto} />
              ))}
            </div>
          </div>
        </section>


        <section className="bg-white py-10">
        <div className="max-w-[960px] mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2">Experience the difference</h2>
    <p className="text-[#5c738a] mb-8">
      SoundOff earplugs are engineered with advanced noise reduction technology to provide superior comfort and performance.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      <div className="border rounded-xl p-6 shadow-sm">
        <ShieldCheck className="w-6 h-6 text-[#101418] mb-4" />
        <h3 className="text-lg font-semibold mb-1">Superior Noise Reduction</h3>
        <p className="text-sm text-[#5c738a]">
          Our earplugs block out unwanted noise while allowing you to hear essential sounds.
        </p>
      </div>

      <div className="border rounded-xl p-6 shadow-sm">
        <Moon className="w-6 h-6 text-[#101418] mb-4" />
        <h3 className="text-lg font-semibold mb-1">All–Night Comfort</h3>
        <p className="text-sm text-[#5c738a]">
          Made with soft, flexible materials for a comfortable fit all night long.
        </p>
      </div>

      <div className="border rounded-xl p-6 shadow-sm">
        <Headphones className="w-6 h-6 text-[#101418] mb-4" />
        <h3 className="text-lg font-semibold mb-1">Versatile Use</h3>
        <p className="text-sm text-[#5c738a]">
          Perfect for studying, sleeping, traveling, and more.
        </p>
      </div>
    </div>
  </div>
</section>






        <section className="bg-[#f7f9fc] py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">What our customers say</h2>
            <p className="text-[#5c738a] mb-6">
              Over 10,000 happy customers improving their focus and sleep.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="bg-white rounded-lg p-6 shadow text-left">
                <p className="text-sm text-[#101418] mb-2">“Life-changing. I use them every day.”</p>
                <span className="text-xs text-[#5c738a]">- Alex M.</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow text-left">
                <p className="text-sm text-[#101418] mb-2">“Perfect for blocking noise while studying.”</p>
                <span className="text-xs text-[#5c738a]">- Sara G.</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
