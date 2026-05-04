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
 * @desc Main entry point for the Phaser game. Configures engine settings,
 *              registers all game scenes.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../colors';
import { LifecycleDemo } from './main-scene';

/**
 * Initializes and starts the Phaser game instance.
 */
function startGame() {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'LifecycleDemo-app',
    scene: [LifecycleDemo],
    backgroundColor: ColorName.CYAN,
  };
  new Phaser.Game(config);
}

startGame();