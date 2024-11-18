"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const dancingScript = localFont({
  src: "../../app/fonts/DancingScript-VariableFont_wght.ttf",
  variable: "--font-dancing-script",
  weight: "100 900",
});

export const SignUp = ({
  isNotHomePage,
  isScrolled,
}: {
  isNotHomePage: boolean;
  isScrolled: boolean;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isNotHomePage ? (
          <Button variant="link" className="text-md text-white">
            Cadastrar
          </Button>
        ) : (
          <Button
            variant="link"
            className={cn(isScrolled ? "text-black" : "text-white", "text-md")}>
            Cadastrar
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={`${dancingScript.className} text-default-orange text-3xl text-center`}>
            Petly
          </DialogTitle>
          <DialogDescription className="text-center">
            Insira seus dados abaixo
          </DialogDescription>
        </DialogHeader>
        <p>teste</p>
      </DialogContent>
    </Dialog>
  );
};
