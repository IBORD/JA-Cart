"use client";
import Link from "next/link";
import { Button } from "../../../components/atoms/Button";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          {t("welcomeTitle")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          {t("welcomeSubtitle")}
        </p>
        <Link href="/produtos">
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full transition">
            {t("viewProductsButton")}
          </Button>
        </Link>
      </section>

      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            {t("styleGalleryTitle")}
          </h2>
          <p className="text-gray-300 mb-6">
            {t("styleGalleryDescription")}
          </p>
          <Link href="/galeria">
            <Button className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-full transition">
              {t("viewGalleryButton")}
            </Button>
          </Link>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            {t("aboutUsTitle")}
          </h2>
          <p className="text-gray-300 mb-6">
            {t("aboutUsDescription")}
          </p>
          <Link href="/sobre">
            <Button className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-full transition">
              {t("learnMore")}
            </Button>
          </Link>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            {t("contactUsTitle")}
          </h2>
          <p className="text-gray-300 mb-6">
            {t("contactUsDescription")}
          </p>
          <Link href="/contato">
            <Button className="bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-full transition">
              {t("goToContactButton")}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}