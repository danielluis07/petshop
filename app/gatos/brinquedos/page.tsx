import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import React from "react";
import { CatProducts } from "../_components/cat-products";
import { getCatToys } from "@/queries/products/get-cat-toys";

const CatToysPage = async () => {
  const data = await getCatToys();

  if (!data) {
    return <div>Houve um problema ao carregar as informações</div>;
  }

  return (
    <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0 mt-44">
      <DynamicBreadcrumb />
      <div className="w-full h-[400px] bg-cover-3 bg-cover bg-[50%] mt-5"></div>
      <CatProducts products={data} />
    </div>
  );
};

export default CatToysPage;