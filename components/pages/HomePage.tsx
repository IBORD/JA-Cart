"use client";
import Link from "next/link";
import { Button } from "../atoms/Button";


export default function HomePage() {

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Bem-vindo à JA-Shop
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Descubra tendências e se vista com atitude. Sua nova experiência em moda começa aqui.
        </p>
        <Link href="/produtos">
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full transition">
            Ver Produtos
          </Button>
        </Link>
      </section>

      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Galeria de Estilo</h2>
          <p className="text-gray-300 mb-6">
            Inspire-se com looks incríveis, desfiles e vídeos da nossa comunidade fashion.
          </p>
          <Link href="/galeria">
            <Button className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-full transition">
              Ver Galeria
            </Button>
          </Link>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-gray-300 mb-6">
            Conheça a história por trás da nossa marca e o que nos move no mundo da moda.
          </p>
          <Link href="/sobre">
            <Button className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-full transition">
              Saber Mais
            </Button>
          </Link>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Fale com a gente</h2>
          <p className="text-gray-300 mb-6">
            Dúvidas, sugestões ou parcerias? Entre em contato conosco.
          </p>
          <Link href="/contato">
            <Button className="bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-full transition">
              Ir para Contato
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}