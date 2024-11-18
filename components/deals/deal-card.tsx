import { Button } from "../ui/button";

type Props = {
  title: string;
  subtitle: string;
  button_text: string;
  href: string;
  image: string;
};

export const DealCard = ({
  title,
  subtitle,
  image,
  button_text,
  href,
}: Props) => {
  return (
    <div
      className={`${image} flex items-center w-full xl:w-[395px] h-72 mx-auto bg-cover rounded-lg overflow-hidden relative`}>
      <div className="w-4/6 xl:w-1/2 pl-4 space-y-3">
        <h2 className="text-sm font-semibold">{subtitle}</h2>
        <h1 className="font-bold text-2xl">{title}</h1>
        <Button>{button_text}</Button>
      </div>
    </div>
  );
};
