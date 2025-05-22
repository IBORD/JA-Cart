"use client";
import { Link } from "../../i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../atoms/LanguageSwitcher"; // Importar o novo componente

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <Link href="/">
        <img
          src="/img/Bg-gray.jpg"
          alt={t("logoAlt")}
          className="h-10 w-auto"
        />
      </Link>
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/produtos"
          className="hover:text-blue-400 transition-colors"
        >
          {t("productsLink")}
        </Link>
        <Link href="/galeria" className="hover:text-blue-400 transition-colors">
          {t("galleryLink")}
        </Link>
        <Link href="/sobre" className="hover:text-blue-400 transition-colors">
          {t("aboutLink")}
        </Link>
        <Link href="/contato" className="hover:text-blue-400 transition-colors">
          {t("contactLink")}
        </Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};