"use client";

import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { Icon } from "../../components/atoms/Icon";

type Midia = {
  id: number;
  tipo: "imagem" | "video";
  url: string;
  titulo: string;
};

const midiasMock: Midia[] = [
  {
    id: 1,
    tipo: "imagem",
    url: "/img/modelo_feminina.jpg",
    titulo: "Look feminino",
  },
  {
    id: 2,
    tipo: "video",
    url: "/video/desfile.mp4",
    titulo: "Exibição de sapato",
  },
  {
    id: 3,
    tipo: "imagem",
    url: "/img/modelo_masculino.jpg",
    titulo: "Look masculino",
  },
];

export default function GaleriaPage() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    const favSalvos = localStorage.getItem("galeriaFavoritos");
    if (favSalvos) setFavoritos(JSON.parse(favSalvos));
  }, []);

  const toggleFavorito = (id: number) => {
    const atualizado = favoritos.includes(id)
      ? favoritos.filter((fav) => fav !== id)
      : [...favoritos, id];

    setFavoritos(atualizado);
    localStorage.setItem("galeriaFavoritos", JSON.stringify(atualizado));
  };

  const compartilhar = async (midia: Midia) => {
    const url = window.location.origin + midia.url;
    try {
      if (navigator.share) {
        await navigator.share({
          title: midia.titulo,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copiado para área de transferência!");
      }
    } catch {
      alert("Erro ao compartilhar");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Galeria</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {midiasMock.map((midia) => (
          <div
            key={midia.id}
            className="relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {midia.tipo === "imagem" ? (
              <img
                src={midia.url}
                alt={midia.titulo}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            ) : (
              <video controls className="w-full h-64 object-cover bg-black">
                <source src={midia.url} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            )}
            <div className="p-4 flex justify-between items-center">
              <h2 className="font-semibold text-sm">{midia.titulo}</h2>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleFavorito(midia.id)}
                  aria-label="Favoritar"
                >
                  <Icon
                    icon={favoritos.includes(midia.id) ? FaHeart : FaRegHeart}
                    label="Favoritar"
                    className={`text-xl transition ${
                      favoritos.includes(midia.id)
                        ? "text-red-500"
                        : "text-gray-400 hover:text-white"
                    }`}
                  />
                </button>
                <button
                  onClick={() => compartilhar(midia)}
                  aria-label="Compartilhar"
                >
                  <Icon
                    icon={FaShareAlt}
                    label="Compartilhar"
                    className="text-blue-400 hover:text-blue-500 text-xl transition"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
