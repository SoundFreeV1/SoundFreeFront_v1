import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  image_url: string;
  slug: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image_url,
  slug,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/producto/${slug}`)}
      className="cursor-pointer flex flex-col gap-4 rounded-lg min-w-60 w-full sm:w-60"
    >
      <div
        className="aspect-square bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url('${image_url}')` }}
      ></div>
      <div>
        <p className="text-[#101418] text-base font-medium leading-normal">{name}</p>
        <p className="text-[#5c738a] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
};
