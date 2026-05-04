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
 * @desc Initializes and configures the Phaser game instance with all scenes
 * and physics engine settings.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../../colors';
import GameScene from './scenes/GameScene';
import UIScene from './scenes/UIScene';
import PauseScene from './scenes/PauseScene';
import MusicScene from './scenes/music_scene';

/**
 * Initializes and starts the Phaser game with the specified container element.
 * Configures the game engine, physics world, and scene management.
 *
 * @param containerId - The HTML element ID where the game canvas will be rendered.
 */
export function StartGame(containerId: string): void {
  const gameConfiguration: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: containerId,
    backgroundColor: ColorName.SKY_BLUE,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 300 },
        debug: false
      }
    },
    scene: [GameScene, UIScene, PauseScene, MusicScene]
  };

  new Phaser.Game(gameConfiguration);
}