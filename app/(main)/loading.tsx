import Banner from "@/components/banner";
import BestSellers from "@/components/best-sellers";
import Brands from "@/components/brands";
import Deals from "@/components/deals";
import NewsLetter from "@/components/newsletter";
import { CategoriesSkeleton } from "@/components/skeletons/main/categories-skeleton";
import { NewProductsSkeleton } from "@/components/skeletons/main/new-products-skeleton";

const Loading = () => {
  return (
    <div className="w-full">
      <Banner />
      <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0">
        {/*  */}
        <div className="w-full mt-20">
          <h1 className="text-3xl text-center font-bold">
            <span className="text-default-orange">Top</span> Categorias
          </h1>
          <CategoriesSkeleton />
        </div>
        {/*  */}
        <BestSellers />
        <Deals />
        {/*  */}
        <div className="w-full mt-20">
          <h1 className="text-3xl text-center font-bold">
            <span className="text-default-orange">Nossas</span> Novidades
          </h1>
          <NewProductsSkeleton />
        </div>
        {/*  */}
      </div>
      <NewsLetter />
      <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0">
        <Brands />
      </div>
    </div>
  );
};

export default Loading;
