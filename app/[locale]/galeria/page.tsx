"use client";

import { GaleriaProvider } from "../../../contexts/GaleriaContext";
import { GaleriaItem } from "../../../components/organisms/GaleriaItem";
import type { Midia } from "../../../contexts/GaleriaContext";

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
  return (
    <GaleriaProvider>
      <div className="container mx-auto px-4 py-6 text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Galeria</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {midiasMock.map((midia) => (
            <GaleriaItem key={midia.id} midia={midia} />
          ))}
        </section>
      </div>
    </GaleriaProvider>
  );
}
