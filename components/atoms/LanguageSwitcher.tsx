"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../../i18n/navigation"; //
import {ChangeEvent} from 'react';
import { routing } from "../../i18n/routing"; //

export const LanguageSwitcher = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative">
      <select
        id="language-switcher"
        value={locale}
        onChange={handleChange}
        className="appearance-none bg-gray-700 border border-gray-600 text-white text-sm rounded-md py-2 px-3 pr-8 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 hover:bg-gray-600 cursor-pointer"
        aria-label={t("languageSwitcherLabel") || "Select language"}
      >
        {routing.locales.map((loc) => ( //
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
};