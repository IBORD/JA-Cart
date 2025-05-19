"use client";

import { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/templates/DefaultLayout";
import { ListProduct } from "../../components/organisms/ListProduct";
import { SearchBar } from "../../components/molecules/SearchBar";
import { Produto } from "../../types/product";
import { fetchProdutos } from "../../utils/api";

export default function ProductsPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      setLoading(true);
      const data = await fetchProdutos();
      setProdutos(data);
      setFilteredProdutos(data);
      setLoading(false);
    }

    carregarProdutos();
  }, []);

  const handleSearch = (term: string) => {
    if (!term) {
      setFilteredProdutos(produtos);
      return;
    }

    const filtrados = produtos.filter((p) =>
      p.nome.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProdutos(filtrados);
  };

  return (
    <>
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Carregando produtos...</p>
      ) : filteredProdutos.length > 0 ? (
        <ListProduct produtos={filteredProdutos} />
      ) : (
        <p className="text-center text-gray-500">Nenhum produto encontrado.</p>
      )}
    </>
  );
}