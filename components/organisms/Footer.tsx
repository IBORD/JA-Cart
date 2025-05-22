"use client";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer")
  return (
    <footer className="bg-gray-900 text-center text-sm text-gray-400 p-4 mt-10 shadow-inner">
      {t("copyright")}
    </footer>
  );
};