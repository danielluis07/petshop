import ProductsPageSkeleton from "@/components/skeletons/products-page/products-page-skeleton";

const Loading = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0 mt-44">
      <ProductsPageSkeleton />
    </div>
  );
};

export default Loading;
