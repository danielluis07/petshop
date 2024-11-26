import { Skeleton } from "@/components/ui/skeleton";

export const NewProductsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
      <Skeleton className="size-56 mx-auto" />
      <Skeleton className="size-56 mx-auto" />
      <Skeleton className="size-56 mx-auto" />
      <Skeleton className="size-56 mx-auto" />
    </div>
  );
};
