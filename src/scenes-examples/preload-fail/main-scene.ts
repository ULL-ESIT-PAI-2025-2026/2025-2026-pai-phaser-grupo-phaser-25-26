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
 * @description Main scene class that manages the instantiation of 
 *              different rectangle game objects.
 */
import * as Phaser from 'phaser';

export class MissingPreloadDemo extends Phaser.Scene {
  constructor() { 
    super('MissingPreloadDemo'); 
  }

  // Saltamos el preload() a propósito

  create() {
    // Intentamos pintar una imagen que Phaser no conoce
    // Resultado: Phaser pintará un cuadrado verde tachado (textura por defecto)
    this.add.image(400, 300, 'imagen_que_no_existe'); 
  }
}