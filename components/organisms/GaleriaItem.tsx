"use client";

import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { Icon } from "../atoms/Icon";
import { useGaleria } from "../../contexts/GaleriaContext";
import { Button } from "../atoms/Button";
import { useTranslations } from "next-intl";

type Midia = {
  id: number;
  tipo: "imagem" | "video";
  url: string;
  titulo: string;
};

export const GaleriaItem = ({ midia }: { midia: Midia }) => {
  const { favoritos, toggleFavorito, compartilhar } = useGaleria();
  const t = useTranslations();

  const favoriteActionLabel = t('favoriteActionLabel'); //
  const shareActionLabel = t('shareActionLabel'); //

  return (
    <div className="relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
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
          {t("videoNotSupported")}
        </video>
      )}
      <div className="p-4 flex justify-between items-center">
        <h2 className="font-semibold text-sm">{midia.titulo}</h2>
        <div className="flex gap-3">
          <Button
            onClick={() => toggleFavorito(midia.id)}
            aria-label={favoriteActionLabel}
            className="bg-transparent hover:bg-transparent p-0 m-0 border-none shadow-none"
          >
            <Icon
              icon={favoritos.includes(midia.id) ? FaHeart : FaRegHeart}
              label={favoriteActionLabel}
              className={`text-xl transition ${
                favoritos.includes(midia.id)
                  ? "text-red-500"
                  : "text-gray-400 hover:text-white"
              }`}
            />
          </Button>
          <Button
            onClick={() => compartilhar(midia)}
            aria-label={shareActionLabel}
            className="bg-transparent hover:bg-transparent p-0 m-0 border-none shadow-none"
          >
            <Icon
              icon={FaShareAlt}
              label={shareActionLabel}
              className="text-blue-400 hover:text-blue-500 text-xl transition"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};