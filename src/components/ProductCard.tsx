import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image_url: string[];
  slug: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image_url,
  slug,
}) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + image_url.length) % image_url.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % image_url.length);
  };

  return (
    <div
      onClick={() => navigate(`/producto/${slug}`)}
      className="cursor-pointer flex flex-col gap-4 rounded-lg min-w-60 w-full sm:w-60"
    >
      <div className="relative group overflow-hidden rounded-xl aspect-square">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url('${image_url[currentIndex]}')` }}
        ></div>

        {image_url.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handlePrev}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleNext}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div>
        <p className="text-[#101418] text-base font-medium leading-normal">
          {name}
        </p>
        <p className="text-[#5c738a] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
