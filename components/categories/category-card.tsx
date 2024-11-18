type CategoryCardProps = {
  name: string;
  image: string;
};

export const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <div
      className={`${image} aspect-square bg-cover rounded-lg overflow-hidden relative group cursor-pointer`}>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <span className="text-white text-lg font-semibold">{name}</span>
      </div>
    </div>
  );
};
