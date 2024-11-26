import Banner from "@/components/banner";
import BestSellers from "@/components/best-sellers";
import Brands from "@/components/brands";
import Deals from "@/components/deals";
import NewsLetter from "@/components/newsletter";
import { CategoriesSkeleton } from "@/components/skeletons/main/categories-skeleton";
import { NewProductsSkeleton } from "@/components/skeletons/main/new-products-skeleton";
import { ProductPageSkeleton } from "@/components/skeletons/product-page/product-page-skeleton";
import ProductsPageSkeleton from "@/components/skeletons/products-page/products-page-skeleton";

const Page = () => {
  return (
    <div className="mt-44 max-w-[1300px] mx-auto">
      <ProductPageSkeleton />
    </div>
  );
};

export default Page;
