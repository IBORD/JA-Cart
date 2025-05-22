"use client";

import { useEffect, useState } from "react";
import { ListProduct } from "../../../components/organisms/ListProduct";
import { SearchBar } from "../../../components/molecules/SearchBar";
import { Produto } from "../../../types/product";
import { fetchProdutos } from "../../../utils/api";
import { useTranslations } from "next-intl";
import { ProductDetailModal } from "../../../components/molecules/ProductDetailModal";

export default function ProductsPage() {
  const t = useTranslations();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);
  const [loading, setLoadingState] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function carregarProdutos() {
      setLoadingState(true);
      const data = await fetchProdutos();
      setProdutos(data);
      setFilteredProdutos(data);
      setLoadingState(false);
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

  const handleOpenModal = (produto: Produto) => {
    setSelectedProduct(produto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="px-4 py-10 bg-[var(--background)] text-[var(--foreground)] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {t("produtos.pageTitle")}
          </h1>

          <div className="mb-6">
            <SearchBar
              onSearch={handleSearch}
              placeholder={t("searchPlaceholder")}
              buttonLabel={t("searchButtonLabel")}
            />
          </div>

          {loading ? (
            <p className="text-center text-gray-400">{t("loading")}</p>
          ) : filteredProdutos.length > 0 ? (
            <ListProduct
              produtos={filteredProdutos}
              onProductClick={handleOpenModal}
            />
          ) : (
            <p className="text-center text-gray-400">
              {t("produtos.noProductsFound")}
            </p>
          )}
        </div>
      </section>
      <ProductDetailModal
        product={selectedProduct}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
