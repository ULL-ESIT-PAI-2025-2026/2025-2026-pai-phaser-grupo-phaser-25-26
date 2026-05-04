/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since April 29, 2026
 * @desc Vite configuration tailored to the specific project directory structure.
 */

import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/2025-2026-pai-phaser-joseangel-kyliam-alejandro/',
  publicDir: 'public',

  build: {
    outDir: 'dist',
    minify: false,
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        // Principal
        main: resolve(__dirname, 'index.html'),
        
        // Juegos principales y tutoriales
        platformGame: resolve(__dirname, 'src/phaser-platform-game/platform-game.html'),

        // Game Objects Examples
        basicImage: resolve(__dirname, 'src/game-objects-examples/basic-image/basic-image.html'),
        basicInteractive: resolve(__dirname, 'src/game-objects-examples/basic-interactive/basic-interactive.html'),
        basicMovement: resolve(__dirname, 'src/game-objects-examples/basic-movement/basic-movement.html'),
        basicRectangle: resolve(__dirname, 'src/game-objects-examples/basic-rectangle/basic-rectangle.html'),
        basicSprite: resolve(__dirname, 'src/game-objects-examples/basic-sprite/basic-sprite.html'),
        setOrigin: resolve(__dirname, 'src/game-objects-examples/set-origin/set-origin.html'),

        // Physics Examples
        physicsSync: resolve(__dirname, 'src/physics-examples/basic-methods-scenes/Synchronization/synchronization.html'),
        physicsMovements: resolve(__dirname, 'src/physics-examples/basic-methods-scenes/movements/movements.html'),
        physicsCollider: resolve(__dirname, 'src/physics-examples/collider-overlap/collider-overlap.html'),
        physicsDynamic: resolve(__dirname, 'src/physics-examples/dynamic-static/dynamic-static.html'),

        // Scenes Examples
        sceneLifecycle: resolve(__dirname, 'src/scenes-examples/life-cycle/LifecycleDemo.html'),
        scenePreloadFail: resolve(__dirname, 'src/scenes-examples/preload-fail/preloadFail.html'),
        sceneTransitionLaunch: resolve(__dirname, 'src/scenes-examples/transition-scenes/launch/launch.html'),
        sceneTransitionSleep: resolve(__dirname, 'src/scenes-examples/transition-scenes/sleep/sleep.html'),
        sceneTransitionStart: resolve(__dirname, 'src/scenes-examples/transition-scenes/start/start.html'),
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
      },
    },
  },

  server: {
    port: 8080,
    open: true,
    host: true,
  },
});