/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Angel Portillo Garcia
 * @author Alejandro Feo Martin
 * @author Kyliam Gabriel Chinea Salcedo
 * @since May 04 2026
 * @desc Main entry point for the Phaser game. Configures engine settings and registers all game scenes.
 */

import * as Phaser from 'phaser';
import { ColorName } from '../colors';
import GameScene from './game-scene';

function main() {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: ColorName.GRAY,
    pixelArt: true,
    scene: [GameScene],
    physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
    }
  };
  new Phaser.Game(config);
}

main();
