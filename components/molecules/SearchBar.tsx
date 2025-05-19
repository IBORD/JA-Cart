"use client";
import { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch} aria-label="Buscar">
        <FaSearch />
      </Button>
    </div>
  );
};