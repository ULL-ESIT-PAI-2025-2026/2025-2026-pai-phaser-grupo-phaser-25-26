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
import { AutoChangeScene } from './main-scene';
import { Escena2 } from './secondary-scene';
import { ColorName } from '../../../colors';

/**
 * Initializes and starts the Phaser game instance.
 */
function startGame() {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'AutoChangeScene-app',
    scene: [AutoChangeScene, Escena2],
    backgroundColor: ColorName.BLACK,
  };
  new Phaser.Game(config);
}

startGame();