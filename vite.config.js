import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
const ASSET_URL = process.env.ASSET_URL || '';
// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/alkona-google-form/actions/' : '/',
  plugins: [vue(),tailwindcss(),],
})
