"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

export const ProductPageSkeleton = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 50);
  }, []);
  return (
    <div className="flex flex-col items-center mt-14 pb-20">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <Skeleton className="w-full h-96" />
          {/* Product Details */}
          <div className="p-6 flex flex-col justify-between">
            {/* Product Title */}
            <Skeleton className="h-10 w-1/2 mb-4" />

            {/* Product Description */}
            <div className="mb-4 space-y-3">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
            </div>

            {/* Product Rating */}
            <Skeleton className="h-6 w-32 mb-4" />

            {/* Price */}
            <Skeleton className="h-10 w-28 mb-4" />

            {/* Buy Button */}
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
