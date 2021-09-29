import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
  //root: process.cwd(),
  base: '/base',
  server: {
    host: '0.0.0.0',
    port: 9900,
    open: true,
    strictPort: true,
  },
  plugins: [vue()],
});
