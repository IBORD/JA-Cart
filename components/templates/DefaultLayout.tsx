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
    <div className="flex flex-col min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />

      

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