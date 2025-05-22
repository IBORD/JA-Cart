"use client";
import { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { FaSearch } from "react-icons/fa";
// import { useTranslations } from "next-intl"; // Alternativa

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string; // Adicionado
  buttonLabel?: string; // Adicionado
}

export const SearchBar = ({ onSearch, placeholder, buttonLabel }: SearchBarProps) => {
  // const t = useTranslations(); // Alternativa
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        type="text"
        placeholder={placeholder || "Buscar produtos..."} // Usar prop ou fallback
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch} aria-label={buttonLabel || "Buscar"}> {/* Usar prop ou fallback */}
        <FaSearch />
      </Button>
    </div>
  );
};