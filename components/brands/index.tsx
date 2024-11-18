const brands: string[] = [
  "bg-brand-1",
  "bg-brand-2",
  "bg-brand-3",
  "bg-brand-4",
];
const Brands = () => {
  return (
    <div className="w-full my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-14">
        {brands.map((brand, index) => (
          <div
            className={`${brand} size-40 bg-cover mx-auto`}
            key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
