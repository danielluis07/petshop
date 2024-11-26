"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const CategoriesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-8 mt-10">
      <Skeleton className="aspect-square rounded-lg" />
      <Skeleton className="aspect-square rounded-lg" />
      <Skeleton className="aspect-square rounded-lg" />
    </div>
  );
};
