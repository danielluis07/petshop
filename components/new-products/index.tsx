import product_image from "@/public/images/food-placeholder.webp";
import { StaticImageData } from "next/image";
import { ProductCard } from "../ui/product-card";

const products: {
  image: StaticImageData;
  title: string;
  price: number;
  rating: number;
  rating_count: number;
}[] = [
  {
    image: product_image,
    title: "Ração para gatos",
    price: 25.99,
    rating: 4.5,
    rating_count: 100,
  },
  {
    image: product_image,
    title: "Brinquedo para cães",
    price: 15.99,
    rating: 4.0,
    rating_count: 50,
  },
  {
    image: product_image,
    title: "Shampoo para cães",
    price: 10.99,
    rating: 4.8,
    rating_count: 8,
  },
  {
    image: product_image,
    title: "Ração para cães",
    price: 30.99,
    rating: 4.7,
    rating_count: 20,
  },
];

const NewProducts = () => {
  return (
    <div className="w-full mt-20">
      <h1 className="text-3xl text-center font-bold">
        <span className="text-default-orange">Nossas</span> Novidades
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            rating_count={product.rating_count}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
