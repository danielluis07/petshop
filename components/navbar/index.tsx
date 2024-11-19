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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LogIn, UserRound } from "lucide-react";
import { Cart } from "@/components/navbar/cart";
import { SearchDialog } from "./search-dialog";
import { cn } from "@/lib/utils";
import MenuMobile from "./menu-mobile";
import { LogOutBtn } from "../auth/log-out-btn";
import { auth } from "@/auth";
import Link from "next/link";

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

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={cn("fixed top-0 w-full py-7 px-10 z-20 bg-orange-500")}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Logo />
          {/* Links */}
          <div className="flex items-center space-x-3 maxmmd:hidden">
            <Button variant="link" className="text-md text-white">
              Início
            </Button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-md text-white">
                    <Link href="/cachorros">Cachorros</Link>
                  </NavigationMenuTrigger>
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
                  <NavigationMenuTrigger className="text-md text-white">
                    <Link href="/gatos">Gatos</Link>
                  </NavigationMenuTrigger>
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
            <Button variant="link" className="text-md text-white">
              Sobre
            </Button>
            <Button variant="link" className="text-md text-white">
              Contato
            </Button>
          </div>
        </div>
        {/*  */}

        <div className="flex items-center space-x-3">
          {/*  */}
          {session ? (
            <div className="flex items-center gap-5 maxmmd:hidden text-white">
              <SearchDialog />
              <Menubar className="bg-transparent border-none">
                <MenubarMenu>
                  <MenubarTrigger>
                    <UserRound className="hover:text-orange-300 cursor-pointer" />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      <LogOutBtn />
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <Cart />
            </div>
          ) : (
            <>
              <div className="text-white maxmmd:hidden">
                <Button variant="link" className="text-white text-md">
                  <Link href="/auth/sign-in">Entrar</Link>
                </Button>
                <Button variant="link" className="text-white text-md">
                  <Link href="/auth/sign-up">Cadastrar</Link>
                </Button>
              </div>
              <Menubar className="minmd2:hidden bg-transparent border-none">
                <MenubarMenu>
                  <MenubarTrigger>
                    <LogIn className="text-white" />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>New Window</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </>
          )}
          {/* Mobile Menu */}
          <div className="minmd2:hidden">
            <MenuMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
