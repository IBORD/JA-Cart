import "../styles/globals.css";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const metadata = {
  title: "teste",
  description: "E-commerce moderno com Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <DefaultLayout pageTitle="JA-Shop">{children}</DefaultLayout>
      </body>
    </html>
  );
}