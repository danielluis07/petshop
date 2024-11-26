import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { AllProducts } from "../_components/all-products";

const Products = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0 mt-44">
      <DynamicBreadcrumb />
      <div className="w-full h-[400px] bg-cover-1 bg-cover bg-[50%] mt-5"></div>
      <AllProducts />
    </div>
  );
};

export default Products;
