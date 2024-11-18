import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="flex text-white items-center bg-orange-500 px-12 py-16 md:px-28 3xl:px-56 shadow-lg">
      <div className="md:w-1/2 text-center md:text-left mt-20 mb-6 md:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Cuide do seu pet com amor e qualidade!
        </h1>
        <p className="text-md mb-6">
          Encontre os melhores produtos para a saúde e felicidade do seu melhor
          amigo.
        </p>
        <Button className="bg-white border text-default-orange hover:text-white hover:bg-transparent hover:border-white">
          Ver produtos
        </Button>
      </div>

      <div className="relative maxmd:hidden w-[450px] h-[300px] lg:w-[550px] lg:h-[400px] xl:w-[690px] xl:h-[540px] bg-hero bg-cover"></div>
    </div>
  );
};

export default Banner;
