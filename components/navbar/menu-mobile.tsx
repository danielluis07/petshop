import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const MenuMobile = ({
  isScrolled,
  isNotHomePage,
}: {
  isScrolled: boolean;
  isNotHomePage: boolean;
}) => {
  return (
    <Sheet>
      {isNotHomePage ? (
        <SheetTrigger asChild className="cursor-pointer text-white">
          <Menu />
        </SheetTrigger>
      ) : (
        <SheetTrigger
          asChild
          className={cn(
            "cursor-pointer",
            isScrolled ? "text-black" : "text-white"
          )}>
          <Menu />
        </SheetTrigger>
      )}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
