import { Product } from "./_components/product";
import RelatedProducts from "@/components/related-products";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { getProduct } from "@/queries/products/get-product";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const data = await getProduct(slug);

  if (!data) {
    return <div>Houve um problema ao carregar as informações</div>;
  }

  return (
    <div className="mt-44 max-w-[1300px] mx-auto">
      <DynamicBreadcrumb />
      <Product
        image={data.product.imageUrl}
        price={data.product.price}
        rating={0}
        rating_count={0}
        title={data.product.name}
        description={data.product.description}
      />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
