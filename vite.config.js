import {
  resolve
} from "path";
import {
  defineConfig
} from "vite";

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
        cart: resolve(__dirname, "cart.html"),
        main: resolve(__dirname, "index.html"),
        watch: resolve(__dirname, "watch.html"),
        mobile: resolve(__dirname, "mobile.html"),
        laptop: resolve(__dirname, "laptop.html"),
        category: resolve(__dirname, "category.html"),
        singleproduct: resolve(__dirname, "singleproduct.html"),
        unavailableProduct: resolve(__dirname, "unavailableProduct.html"),

      },
    },
  },
});