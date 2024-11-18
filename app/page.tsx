import Banner from "@/components/banner";
import BestSellers from "@/components/best-sellers";
import Brands from "@/components/brands";
import Categories from "@/components/categories";
import Deals from "@/components/deals";
import NewProducts from "@/components/new-products";
import NewsLetter from "@/components/newsletter";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0">
        <Categories />
        <BestSellers />
        <Deals />
        <NewProducts />
      </div>
      <NewsLetter />
      <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0">
        <Brands />
      </div>
    </div>
  );
}
