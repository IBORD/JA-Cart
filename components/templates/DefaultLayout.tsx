"use client";

import { ReactNode } from "react";
import { Navbar } from "../organisms/NavBar";
import { Footer } from "../organisms/Footer";


interface DefaultLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export const DefaultLayout = ({ children, pageTitle }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold" tabIndex={-1}>
            {pageTitle || "E-Commerce"}
          </h1>
        </div>
      </header>

      <main
        role="main"
        className="flex-grow container mx-auto p-4"
        tabIndex={-1}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};