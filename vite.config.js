import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/PhoenixTWM.ts'),
      formats: ['umd'],
      name: 'PhoenixTWM',
      fileName: () => 'PhoenixTWM.js',
    },
  },
  plugins: [
    dts({
      exclude: ['**/**.test.ts'],
    }),
  ],
});
