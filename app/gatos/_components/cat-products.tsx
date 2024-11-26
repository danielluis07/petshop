"use client";

import { ProductCard } from "@/components/ui/product-card";

type Props = {
  products: Product[];
};

export const CatProducts = ({ products }: Props) => {
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
        {products.map((item, index) => (
          <ProductCard
            image={item.product.imageUrl}
            price={item.product.price}
            rating={0}
            slug={item.product.slug}
            rating_count={0}
            title={item.product.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
