"use client";

import { ProductCard } from "@/components/ui/product-card";
import placeholder from "@/public/images/food-placeholder.webp";

const products = [
  {
    id: 1,
    name: "Dog Food",
    category: "Food",
    petType: "Dog",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 2,
    name: "Cat Food",
    category: "Food",
    petType: "Cat",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 3,
    name: "Dog Toy",
    category: "Toy",
    petType: "Dog",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 4,
    name: "Cat Toy",
    category: "Toy",
    petType: "Cat",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 5,
    name: "Dog Care",
    category: "Care",
    petType: "Dog",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 6,
    name: "Cat Care",
    category: "Care",
    petType: "Cat",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 6,
    name: "Cat Care",
    category: "Care",
    petType: "Cat",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 6,
    name: "Cat Care",
    category: "Care",
    petType: "Cat",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 6,
    name: "Cat Care",
    category: "Care",
    petType: "Cat",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
  {
    id: 6,
    name: "Cat Care",
    category: "Care",
    petType: "Cat",
    rating: 4.5,
    price: 25,
    rating_count: 100,
    image: placeholder,
  },
];

export const CatProducts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center mt-14">
        Produtos de <span className="text-default-orange">Gatos</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
        <div className="">
          <select className="border rounded-md p-2 text-sm">
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Toy">Toys</option>
            <option value="Care">Care Products</option>
          </select>
        </div>
        <div className="flex justify-between md:justify-normal space-x-2.5 mt-3 md:mt-0 w-full md:w-auto">
          <select className="border rounded-md p-2 text-sm">
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="popular">Most Popular</option>
          </select>
          <select className="border rounded-md p-2 text-sm">
            <option value="price_asc">Rating: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
        {products.map((product, index) => (
          <ProductCard
            image={product.image}
            price={product.price}
            rating={product.rating}
            rating_count={product.rating_count}
            title={product.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
