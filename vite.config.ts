import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@api', replacement: '/src/@core/api' },
      { find: '@hook', replacement: '/src/@core/hook' },
      { find: '@util', replacement: '/src/@core/util' },
      { find: '@type', replacement: '/src/@type' },
      { find: '@asset', replacement: '/src/asset' },
      { find: '@component', replacement: '/src/component' },
      { find: '@page', replacement: '/src/page' },
      { find: '@recoil', replacement: '/src/recoil' },
      { find: '@style', replacement: '/src/style' },

      { find: 'node_modules', replacement: '/node_modules' },
    ],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
