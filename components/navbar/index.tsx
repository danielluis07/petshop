"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { UserRound } from "lucide-react";
import { Cart } from "@/components/navbar/cart";
import { SearchDialog } from "./search-dialog";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import MenuMobile from "./menu-mobile";
import { usePathname } from "next/navigation";
import { SignIn } from "../auth/sign-in";
import { SignUp } from "../auth/sign-up";

const dogs: { title: string; href: string }[] = [
  { title: "Alimentos", href: "#" },
  { title: "Brinquedos", href: "#" },
  { title: "Higiene", href: "#" },
];

const cats: { title: string; href: string }[] = [
  { title: "Alimentos", href: "#" },
  { title: "Brinquedos", href: "#" },
  { title: "Higiene", href: "#" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const pathname = usePathname();

  const isLogged = false;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isNotHomePage = pathname !== "/";

  return (
    <div
      className={cn(
        "fixed top-0 w-full py-7 px-10 z-20",
        isNotHomePage
          ? "bg-orange-500"
          : isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      )}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Logo isScrolled={isScrolled} isNotHomePage={isNotHomePage} />
          {/* Links */}
          <div className="flex items-center space-x-3 maxmmd:hidden">
            {isNotHomePage ? (
              <Button variant="link" className="text-md text-white">
                Início
              </Button>
            ) : (
              <Button
                variant="link"
                className={cn(
                  "text-md",
                  isScrolled ? "text-black" : "text-white"
                )}>
                Início
              </Button>
            )}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {isNotHomePage ? (
                    <NavigationMenuTrigger className="text-md text-white">
                      Cachorros
                    </NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuTrigger
                      className={cn(
                        "text-md",
                        isScrolled ? "text-black" : "text-white"
                      )}>
                      Cachorros
                    </NavigationMenuTrigger>
                  )}
                  <NavigationMenuContent>
                    <div className="flex flex-col p-4 gap-3">
                      {dogs.map((dog) => (
                        <NavigationMenuLink key={dog.title} href={dog.href}>
                          {dog.title}
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <NavigationMenuIndicator />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {isNotHomePage ? (
                    <NavigationMenuTrigger className="text-md text-white">
                      Gatos
                    </NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuTrigger
                      className={cn(
                        "text-md",
                        isScrolled ? "text-black" : "text-white"
                      )}>
                      Gatos
                    </NavigationMenuTrigger>
                  )}
                  <NavigationMenuContent>
                    <div className="flex flex-col p-4 gap-3">
                      {cats.map((dog) => (
                        <NavigationMenuLink key={dog.title} href={dog.href}>
                          {dog.title}
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <NavigationMenuIndicator />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {isNotHomePage ? (
              <Button variant="link" className="text-md text-white">
                Sobre
              </Button>
            ) : (
              <Button
                variant="link"
                className={cn(
                  "text-md",
                  isScrolled ? "text-black" : "text-white"
                )}>
                Sobre
              </Button>
            )}
            {isNotHomePage ? (
              <Button variant="link" className="text-md text-white">
                Contato
              </Button>
            ) : (
              <Button
                variant="link"
                className={cn(
                  "text-md",
                  isScrolled ? "text-black" : "text-white"
                )}>
                Contato
              </Button>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="minmd2:hidden">
          <MenuMobile isScrolled={isScrolled} isNotHomePage={isNotHomePage} />
        </div>
        {/*  */}
        {isLogged ? (
          <div
            className={cn(
              "flex gap-5 maxmmd:hidden",
              isScrolled || isNotHomePage ? "text-black" : "text-white"
            )}>
            <SearchDialog />
            <UserRound
              className={cn(
                isNotHomePage && "text-white",
                "hover:text-orange-300 cursor-pointer"
              )}
            />
            <Cart />
          </div>
        ) : (
          <div
            className={cn(
              isScrolled || isNotHomePage ? "text-black" : "text-white"
            )}>
            <SignIn isNotHomePage={isNotHomePage} isScrolled={isScrolled} />
            <SignUp isNotHomePage={isNotHomePage} isScrolled={isScrolled} />
          </div>
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
