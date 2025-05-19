import "../styles/globals.css";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const metadata = {
  title: "JA-Shop",
  description: "E-commerce moderno com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-gray-100">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
