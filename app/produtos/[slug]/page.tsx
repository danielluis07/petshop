import placeholder from "@/public/images/food-placeholder.webp";
import { Product } from "./_components/product";
import RelatedProducts from "@/components/related-products";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const data = {
    title: "Awesome Product",
    price: 29.99,
    rating: 4.5,
    description:
      "Sollicitudin faucibus vivamus conubia eleifend enim sit sed fusce curae augue nec. Primis sollicitudin lorem netus montes justo. Lorem condimentum ultrices sem semper sociosqu quam.",
    rating_count: 100,
    image: placeholder,
  };

  return (
    <div className="mt-44 max-w-[1300px] mx-auto">
      <DynamicBreadcrumb />
      <Product
        image={data.image}
        price={data.price}
        rating={data.rating}
        rating_count={data.rating_count}
        title={data.title}
        description={data.description}
      />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
