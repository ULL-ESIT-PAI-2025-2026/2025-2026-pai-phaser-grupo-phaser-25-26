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

/**
 * @classdesc Scene demonstrating the core Phaser lifecycle methods and their execution order.
 */
export class LifecycleDemo extends Phaser.Scene {
  constructor() { 
    super('LifecycleDemo'); 
  }

  /* Called when the scene is first initialized. Ideal for data setup. */
  init(): void {
    console.log('1. INIT: Preparando el escenario (Variables y datos)');
  }

  /* Used to load assets like images, audio, and spritesheets before the scene starts. */
  preload(): void {
    console.log('2. PRELOAD: Descargando imágenes y sonidos de internet');
  }

  /* Called once preload is finished. Used to create game objects and physics. */
  create(): void {
    console.log('3. CREATE: Poniendo a los actores en el escenario');
  }

  /* The main game loop. Runs approximately 60 times per second. */
  update(): void {
    // El motor de Phaser ejecuta este método constantemente para procesar lógica en tiempo real.
  }
}