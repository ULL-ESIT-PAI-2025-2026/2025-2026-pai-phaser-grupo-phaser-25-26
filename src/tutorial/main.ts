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
 * physics world, and registers all game scenes.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../colors';

import StartScene from './scenes/StartScene';
import UIScene from './scenes/UIScene';

import LevelScenes1 from './scenes/Level1Scenes';
import LevelScenes2 from './scenes/Level2Scenes';
import GameScene from './scenes/GameScene';

import Physics1 from './scenes/Physics1';
import Physics2 from './scenes/Physics2';
import Physics3 from './scenes/Physics3';
import Physics4 from './scenes/Physics4';
import Physics5 from './scenes/Physics5';

/**
 * Global configuration for the Phaser game instance.
 * Defines the renderer type, canvas dimensions, physics engine properties,
 * and the order of scene execution.
 */
const gameConfiguration: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: ColorName.BLACK,

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300, x: 0 },

      debug: true
    }
  },

  scene: [
    StartScene,
    LevelScenes1,
    LevelScenes2,
    GameScene,
    Physics1,
    Physics2,
    Physics3,
    Physics4,
    Physics5,
    UIScene
  ]
};

new Phaser.Game(gameConfiguration);