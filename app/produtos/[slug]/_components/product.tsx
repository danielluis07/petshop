"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholder from "@/public/images/image-placeholder.jpg";
import { Rating } from "react-simple-star-rating";
import { formatPrice } from "@/lib/format-price";

type Props = {
  image: string | null;
  title: string;
  price: number;
  rating: number;
  rating_count: number;
  description: string | null;
};

export const Product = ({
  image,
  price,
  rating,
  description,
  rating_count,
  title,
}: Props) => {
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative bg-gray-50 h-96">
            <Image
              src={image || placeholder} // Replace with your image source
              alt="Product Image"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col justify-between">
            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>

            {/* Product Description */}
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Product Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center mt-2">
                <Rating
                  readonly
                  size={15}
                  fillColor="gold"
                  initialValue={rating}
                />
                <span className="text-gray-500 text-sm pt-1 pl-1">
                  ({rating_count})
                </span>
              </div>
            </div>

            {/* Price */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {formatPrice(price)}
            </h2>

            {/* Buy Button */}
            <Button variant="outline">Adicionar ao carrinho</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
