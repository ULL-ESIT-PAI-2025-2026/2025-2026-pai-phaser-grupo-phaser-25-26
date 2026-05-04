/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since Apr 29 2026
 * @description Main entry point for the Phaser game. Configures engine settings, 
 *              registers all game scenes.
 */
import * as Phaser from 'phaser';
import { MainScene } from './main-scene';
import { UIScene } from './UIScene';

function startGame() {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    // La primera es la que arranca; la segunda espera a ser "lanzada"
    scene: [MainScene, UIScene], 
  };
  new Phaser.Game(config);
}

startGame();