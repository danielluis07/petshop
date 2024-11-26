import Banner from "@/components/banner";
import BestSellers from "@/components/best-sellers";
import Brands from "@/components/brands";
import Categories from "@/components/categories";
import Deals from "@/components/deals";
import NewProducts from "@/components/new-products";
import NewsLetter from "@/components/newsletter";
import { getCategories } from "@/queries/categories/get-categories";
import { getNewProducts } from "@/queries/products/get-new-products";

export default async function Home() {
  const [newProducts, categories] = await Promise.all([
    await getNewProducts(),
    await getCategories(),
  ]);

  if (!newProducts || !categories) {
    return <div>Houve um problema ao carregar as informações</div>;
  }

  return (
    <div className="w-full">
      <Banner />
      <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0">
        <Categories categories={categories} />
        <BestSellers />
        <Deals />
        <NewProducts newProducts={newProducts} />
      </div>
      <NewsLetter />
      <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0">
        <Brands />
      </div>
    </div>
  );
}
