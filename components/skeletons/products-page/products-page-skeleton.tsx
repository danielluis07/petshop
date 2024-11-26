"use client";

import { Skeleton } from "@/components/ui/skeleton";

const ProductsPageSkeleton = () => {
  return (
    <div className="pb-10">
      <Skeleton className="w-20 h-8" />
      <Skeleton className="w-full h-[400px] mt-5" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-14 mb-6">
          <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto space-y-2 md:space-y-0">
            <Skeleton className="w-20 h-8" />
            <Skeleton className="w-20 h-8" />
          </div>
          <div className="flex justify-between md:justify-normal space-x-2.5 mt-3 md:mt-0 w-full md:w-auto">
            <Skeleton className="w-20 h-8" />
            <Skeleton className="w-20 h-8" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="w-full h-[300px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPageSkeleton;
