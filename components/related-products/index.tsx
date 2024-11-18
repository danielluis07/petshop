"use client";

import product_image from "@/public/images/food-placeholder.webp";
import Image, { StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  {
    image: product_image,
    title: "Brinquedo para gatos",
    price: 12.99,
    rating: 4.2,
    rating_count: 30,
  },
  {
    image: product_image,
    title: "Shampoo para gatos",
    price: 8.99,
    rating: 4.9,
    rating_count: 5,
  },
];

const RelatedProducts = () => {
  return (
    <div className="w-full mt-32 mb-20">
      <h1 className="text-3xl text-center font-bold">
        <span className="text-default-orange">Produtos</span> Relacionados
      </h1>
      <Carousel opts={{ align: "start" }} className="w-full mt-10">
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 mx-auto">
              <div className="flex flex-col aspect-square items-center justify-center p-6">
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt="product"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 
                   (max-width: 768px) 50vw, 
                   (max-width: 1024px) 33.33vw, 
                   25vw"
                  />
                </div>
                <p className="text-lg font-bold text-gray-800 truncate text-center">
                  {product.title}
                </p>
                <span className="text-lg font-semibold text-default-orange">
                  R${product.price.toFixed(2)}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max2xl:hidden" />
        <CarouselNext className="max2xl:hidden" />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
