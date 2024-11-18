"use client";

import placeholder from "@/public/images/food-placeholder.webp";
import Image from "next/image";

const products = [
  {
    image: placeholder,
    name: "Dog Food",
    price: 25,
  },
  {
    image: placeholder,
    name: "Dog Food",
    price: 25,
  },
  {
    image: placeholder,
    name: "Dog Food",
    price: 25,
  },
];

export const Summary = () => {
  return (
    <div className="w-full">
      {products.map((product, index) => (
        <div className="flex" key={index}>
          <div className="flex items-center">
            {/* Image */}
            <div className="relative size-32">
              <Image
                src={placeholder}
                alt="Dog Food"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 16rem"
                className="object-cover rounded-md"
              />
            </div>
            {/* Info */}
            <p>{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
