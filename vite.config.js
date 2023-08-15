import { defineConfig } from 'vite';
import { glob } from 'glob';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import stylelint from 'vite-plugin-stylelint';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import webfontDownload from 'vite-plugin-webfont-dl';
import zipPack from 'vite-plugin-zip-pack';
import autoAlias from 'vite-plugin-auto-alias';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    stylelint({ fix: true }),
    ViteMinifyPlugin({}),
    VitePluginSvgSpritemap('./src/icons/*.svg'),
    webfontDownload(),
    zipPack(),
    autoAlias({ mode: 'sync' }),
    imagePresets({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 }
        }
      })
    }),
    injectHTML(),
    FullReload(['./src/**/**.html']),
    reactClickToComponent()
  ],
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html')
    }
  },
  base: '/vite-react-start/' // має відповідати шляху в index.jsx
});
