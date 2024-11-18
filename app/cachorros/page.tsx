import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { DogProducts } from "./_components/dog-products";

const DogProductsPage = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0 mt-44">
      <DynamicBreadcrumb />
      <div className="w-full h-[450px] bg-cover-2 bg-cover bg-[50%] mt-5"></div>
      <DogProducts />
    </div>
  );
};

export default DogProductsPage;
