import { DealCard } from "./deal-card";

const deals: {
  title: string;
  subtitle: string;
  button_text: string;
  href: string;
  image: string;
}[] = [
  {
    title: "Promoção de Verão",
    subtitle: "Até 30% off em roupas e camas quentinhas!",
    button_text: "Compre Agora",
    href: "#",
    image: "bg-deal-1",
  },
  {
    title: "Economize Mais",
    subtitle: "Descontos especiais em alimentos e brinquedos!",
    button_text: "Economize Agora",
    href: "#",
    image: "bg-deal-2",
  },
  {
    title: "Pacote para Novos Donos",
    subtitle: "Tudo o que seu novo pet precisa, num só kit!",
    button_text: "Ver Kits",
    href: "#",
    image: "bg-deal-3",
  },
];

const Deals = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 p-8 mt-10">
      {deals.map((deal, index) => (
        <DealCard
          key={index}
          title={deal.title}
          button_text={deal.button_text}
          href={deal.href}
          subtitle={deal.subtitle}
          image={deal.image}
        />
      ))}
    </div>
  );
};

export default Deals;
