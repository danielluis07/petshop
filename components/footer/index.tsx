"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/navbar/logo";
import { Mail, Phone, MapPin } from "lucide-react";
import payment from "@/public/images/payment.png";
import Image from "next/image";

const Footer = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="bg-black text-white pt-20 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo */}
        <Logo />

        {/* Informações de contato */}
        <div className="text-sm text-gray-400 space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>contato@petly.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>(11) 1234-5678</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Rua Exemplo, 123 - São Paulo, SP</span>
          </div>
        </div>

        {/* Links de navegação */}
        <nav className="flex text-gray-400 space-x-6">
          <Link href="/about" className="hover:text-default-orange">
            Sobre
          </Link>
          <Link href="/products" className="hover:text-default-orange">
            Produtos
          </Link>
          <Link href="/contact" className="hover:text-default-orange">
            Contato
          </Link>
        </nav>

        {/* Direitos autorais */}
        <div className="relative w-[250px] h-[20px]">
          <Image
            src={payment}
            alt="payments"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 250px"
          />
        </div>
      </div>
      <div className="flex justify-center pt-20 pb-10">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Petly. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
