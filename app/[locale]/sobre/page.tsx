"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

export default function SobrePage() {
  const t = useTranslations("sobre");

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-[var(--foreground)]">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("pageTitle")}
      </h1>

      <p
        className="mb-4 text-justify leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("paragraph1") }}
      />

      <p
        className="mb-4 text-justify leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("paragraph2") }}
      />

      <p
        className="mb-4 text-justify leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("paragraph3") }}
      />

      <p className="mb-4 text-justify leading-relaxed">
        {t.rich("paragraph4_part1")}
        {" "}
        <Link href="/galeria" className="font-bold text-blue-400 hover:text-blue-300">
          {t("paragraph4_galleryLink")}
        </Link>
        {" "}
        {t.rich("paragraph4_part2")}
      </p>

      <p
        className="text-justify leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("paragraph5") }}
      />
    </section>
  );
}