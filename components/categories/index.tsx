import { CategoryCard } from "./category-card";

const categories: { name: string; image: string }[] = [
  { name: "Alimentos", image: "bg-pet-food" },
  { name: "Brinquedos", image: "bg-pet-toy" },
  { name: "Higiene", image: "bg-pet-care" },
];

const Categories = () => {
  return (
    <div className="w-full mt-20">
      <h1 className="text-3xl text-center font-bold">
        <span className="text-default-orange">Top</span> Categorias
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-8 mt-10">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
