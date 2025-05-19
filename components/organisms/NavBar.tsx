"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      
      <Link href="/">
        <img
          src="/img/jA-Shop sem fundo.jpg"
          alt="Logo da Minha Loja"
          className="h-10 w-auto"
        />
      </Link>
      <div className="space-x-4">
        <Link href="/produtos">Produtos</Link>
        <Link href="/galeria">Galeria</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </div>
    </nav>
  );
};