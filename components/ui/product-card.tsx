"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Button } from "@/components/ui/button";

type Props = {
  image: StaticImageData;
  title: string;
  price: number;
  rating: number;
  rating_count: number;
};

export const ProductCard = ({
  image,
  price,
  rating,
  title,
  rating_count,
}: Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
          className="object-contain lg:object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-center mt-2">
          <Rating readonly size={15} fillColor="gold" initialValue={rating} />
          <span className="text-gray-500 text-sm pt-1 pl-1">
            ({rating_count})
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 truncate text-center">
          {title}
        </h2>
        <div className="flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-900">
            R${price.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Comprar</Button>
        </div>
      </div>
    </div>
  );
};
