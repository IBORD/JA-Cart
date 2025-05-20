"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Midia = {
  id: number;
  tipo: "imagem" | "video";
  url: string;
  titulo: string;
};

type GaleriaContextType = {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
  compartilhar: (midia: Midia) => void;
};

const GaleriaContext = createContext<GaleriaContextType | undefined>(undefined);

export const GaleriaProvider = ({ children }: { children: ReactNode }) => {
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
        await navigator.share({ title: midia.titulo, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copiado para área de transferência!");
      }
    } catch {
      alert("Erro ao compartilhar");
    }
  };

  return (
    <GaleriaContext.Provider
      value={{ favoritos, toggleFavorito, compartilhar }}
    >
      {children}
    </GaleriaContext.Provider>
  );
};

export const useGaleria = () => {
  const context = useContext(GaleriaContext);
  if (!context) {
    throw new Error("useGaleria deve ser usado dentro de GaleriaProvider");
  }
  return context;
};