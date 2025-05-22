"use client";

import { GaleriaProvider } from "../../../contexts/GaleriaContext";
import { GaleriaItem } from "../../../components/organisms/GaleriaItem";
import type { Midia } from "../../../contexts/GaleriaContext";
import { useTranslations } from 'next-intl';

const midiasMock: Midia[] = [
  {
    id: 1,
    tipo: "imagem",
    url: "/img/modelo_feminina.jpg",
    titulo: "galeria.item1Title",
  },
  {
    id: 2,
    tipo: "video",
    url: "/video/desfile.mp4",
    titulo: "galeria.item2Title",
  },
  {
    id: 3,
    tipo: "imagem",
    url: "/img/modelo_masculino.jpg",
    titulo: "galeria.item3Title",
  },
];

export default function GaleriaPage() {
  const t = useTranslations();

  return (
    <GaleriaProvider>
      <div className="container mx-auto px-4 py-6 text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">{t("galeria.pageTitle")}</h1>
        {midiasMock.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {midiasMock.map((midia) => (
              <GaleriaItem 
                key={midia.id} 
                midia={{
                  ...midia,
                  titulo: t(midia.titulo) 
                }} 
              />
            ))}
          </section>
        ) : (
          <p className="text-center text-gray-400">{t("galeria.noItems")}</p>
        )}
      </div>
    </GaleriaProvider>
  );
}