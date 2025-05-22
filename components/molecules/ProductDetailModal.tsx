"use client";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { Produto } from "../../types/product";

interface ProductDetailModalProps {
  product: Produto | null;
  open: boolean;
  onClose: () => void;
}

export const ProductDetailModal = ({
  product,
  open,
  onClose,
}: ProductDetailModalProps) => {
  const t = useTranslations();

  if (!product) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="product-detail-modal-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="product-detail-modal-title">
        {t(`produtos.productName_${product.id}`)}
        <IconButton
          aria-label={t("closeButtonLabel") || "Fechar"}
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <img
            src={product.imagem}
            alt={t(`produtos.productName_${product.id}`)}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "300px",
              borderRadius: "4px",
            }}
          />
        </Box>
        <DialogContentText component="div" sx={{ mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            {t(`produtos.productDescription_${product.id}`)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Categoria: {product.categoria}
          </Typography>
        </DialogContentText>
        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
          {t("produtos.currencySymbol")} {product.preco.toFixed(2)}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{ justifyContent: "space-between", padding: "16px 24px" }}
      >
        <Button onClick={onClose} color="inherit">
          {t("closeButtonLabel") || "Fechar"}
        </Button>
        <Button
          onClick={() => {
            alert(
              `${t("produtos.addToCartButton")} - ${t(
                `produtos.productName_${product.id}`
              )}`
            );
            onClose();
          }}
          color="primary"
          variant="contained"
        >
          {t("produtos.addToCartButton")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
