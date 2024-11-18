import Image from "next/image";
import cat from "@/public/images/big-cat.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsLetter = () => {
  return (
    <div className="relative mt-32 pt-10 bg-orange-500 w-full minlg2:h-[438px]">
      {/* div 1 */}
      <div className="absolute -top-28 w-[700px] h-[550px] maxlg2:hidden">
        <div className="relative w-full h-full">
          <Image
            src={cat}
            priority
            alt="cat"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
          />
        </div>
      </div>
      {/* div 2 */}
      <div className="minlg2:absolute minlg2:right-0 minlg2:top-1/2 minlg2:-translate-y-1/2 w-full minlg2:w-1/2 pr-10 pl-10 pb-10 minlg2:pl-0 minlg2:pb-0 space-y-5 text-white">
        <p className="text-3xl font-semibold">
          Fique por Dentro das Novidades!
        </p>
        <p className="text-lg">
          Receba ofertas exclusivas, dicas de cuidados com pets e novidades
          direto no seu e-mail
        </p>
        <div className="space-y-4">
          <Input placeholder="Insira seu e-mail aqui..." />
          <Button className="w-full" variant="secondary">
            Assinar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
