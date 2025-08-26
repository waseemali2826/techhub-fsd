import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// Performance-optimized Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize bundle splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
          
          // Feature chunks
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'charts': ['recharts'],
          'utils': ['class-variance-authority', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize CSS
    cssCodeSplit: true,
    // Source maps for production debugging
    sourcemap: false,
  },
  
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
    ],
    exclude: ['animate.css'], // Exclude heavy animation library
  },
  
  // Server optimizations
  server: {
    hmr: {
      overlay: false, // Disable error overlay for performance
    },
  },
  
  // CSS optimizations
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [
        // Add PostCSS plugins for optimization
      ],
    },
  },
  
  // Experimental features for performance
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
