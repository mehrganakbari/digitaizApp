import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    open: true,
    host: "0.0.0.0",
    port: 3011,
  },
  build: {
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        category: resolve(__dirname, "category.html"),
        singleproduct: resolve(__dirname, "singleproduct.html"),
        unavailableProduct: resolve(__dirname, "unavailableProduct.html"),
        cart: resolve(__dirname, "cart.html"),
      },
    },
  },
});