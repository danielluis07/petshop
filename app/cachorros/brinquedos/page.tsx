import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { DogProducts } from "../_components/dog-products";
import { getDogToys } from "@/queries/products/get-dog-toys";

const DogToysPage = async () => {
  const data = await getDogToys();

  if (!data) {
    return <div>Erro ao carregar os produtos</div>;
  }

  return (
    <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0 mt-44">
      <DynamicBreadcrumb />
      <div className="w-full h-[400px] bg-cover-2 bg-cover bg-[50%] mt-5"></div>
      <DogProducts products={data} />
    </div>
  );
};

export default DogToysPage;
