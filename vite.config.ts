import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

console.log(import.meta.env.DEV);
//仅当 "--module" 选项为 "es2020"、"esnext" 或 "system" 时，才允许使用 "import. meta" 元属性。
// https://vitejs.dev/config/
export default defineConfig({
  //root: process.cwd(),
  base: "/base",
  server: {
    host: "0.0.0.0",
    port: 9900,
    open: true,
    strictPort: true,
  },
  plugins: [vue()],
});
