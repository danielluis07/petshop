import { ProductPageSkeleton } from "@/components/skeletons/product-page/product-page-skeleton";

const Loading = () => {
  return (
    <div className="mt-44 max-w-[1300px] mx-auto">
      <ProductPageSkeleton />
    </div>
  );
};

export default Loading;
