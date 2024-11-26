import { ProductCard } from "../ui/product-card";

type Props = {
  newProducts: Product[];
};

const NewProducts = ({ newProducts }: Props) => {
  return (
    <div className="w-full mt-20">
      <h1 className="text-3xl text-center font-bold">
        <span className="text-default-orange">Nossas</span> Novidades
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {newProducts.map((item, index) => (
          <ProductCard
            key={index}
            title={item.product.name}
            slug={item.product.slug}
            image={item.product.imageUrl}
            price={item.product.price}
            rating={0}
            rating_count={0}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
