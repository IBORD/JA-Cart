"use client";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center text-sm text-gray-400 p-4 mt-10 shadow-inner">
      &copy; {new Date().getFullYear()} JA-Shop. Desenvolvido por José Alves.
    </footer>
  );
};