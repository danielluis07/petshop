import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { Summary } from "./_components/summary";

const CheckoutPage = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-10 xl:px-5 2xl:px-0 mt-36">
      <DynamicBreadcrumb />
      <Summary />
    </div>
  );
};

export default CheckoutPage;
