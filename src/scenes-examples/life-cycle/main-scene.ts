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

export class LifecycleDemo extends Phaser.Scene {
  constructor() { 
    super('LifecycleDemo'); 
  }

  init() {
    console.log('1. INIT: Preparando el escenario (Variables y datos)');
  }

  preload() {
    console.log('2. PRELOAD: Descargando imágenes y sonidos de internet');
  }

  create() {
    console.log('3. CREATE: Poniendo a los actores en el escenario');
  }

  update() {
    // Si descomentas esto, la consola explotará repitiendo el mensaje 60 veces por segundo
    // console.log('4. UPDATE: El bucle infinito del juego (The Engine Lives)');
  }
}