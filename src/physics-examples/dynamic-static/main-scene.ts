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

export class DinamicoEstaticoDemo extends Phaser.Scene {
  constructor() { super('DinamicoEstaticoDemo'); }

  create() {
    this.add.text(400, 50, 'Izquierda: Dinámico | Derecha: Estático', { fontSize: '24px' }).setOrigin(0.5);

    // 1. OBJETO DINÁMICO (Se cae al vacío)
    const cajaDinamica = this.add.rectangle(200, 200, 50, 50, 0xff0000);
    this.physics.add.existing(cajaDinamica); // Por defecto es dinámico

    // 2. OBJETO ESTÁTICO (Se queda flotando en el aire inamovible)
    const muroEstatico = this.add.rectangle(600, 200, 50, 50, 0x555555);
    // El 'true' mágico le dice a Phaser: "Ponle físicas pero hazlo estático"
    this.physics.add.existing(muroEstatico, true); 
  }
}