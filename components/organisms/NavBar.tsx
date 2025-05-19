"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <Link href="/">
        <img
          src="/img/Bg-gray.jpg"
          alt="Logo da Minha Loja"
          className="h-10 w-auto"
        />
      </Link>
      <div className="space-x-6 text-sm font-medium flex flex-wrap">
        <Link
          href="/produtos"
          className="hover:text-blue-400 transition-colors"
        >
          Produtos
        </Link>
        <Link href="/galeria" className="hover:text-blue-400 transition-colors">
          Galeria
        </Link>
        <Link href="/sobre" className="hover:text-blue-400 transition-colors">
          Sobre
        </Link>
        <Link href="/contato" className="hover:text-blue-400 transition-colors">
          Contato
        </Link>
      </div>
    </nav>
  );
};