import "../../styles/globals.css";
import { DefaultLayout } from "../../components/templates/DefaultLayout";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';

export const metadata = {
  title: "JA-Shop",
  description: "E-commerce moderno com Next.js",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-gray-100">
        <NextIntlClientProvider><DefaultLayout>{children}</DefaultLayout></NextIntlClientProvider>
      </body>
    </html>
  );
}