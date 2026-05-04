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


export class ColliderOverlapDemo extends Phaser.Scene {
  constructor() { super('ColliderOverlapDemo'); }

  create() {
    this.add.text(200, 50, 'Collider (Choca)', { fontSize: '20px' }).setOrigin(0.5);
    this.add.text(600, 50, 'Overlap (Atraviesa)', { fontSize: '20px' }).setOrigin(0.5);

    // Creamos dos suelos estáticos
    const suelo1 = this.add.rectangle(200, 400, 200, 20, 0x888888);
    const suelo2 = this.add.rectangle(600, 400, 200, 20, 0x888888);
    this.physics.add.existing(suelo1, true);
    this.physics.add.existing(suelo2, true);

    // Creamos dos cajas que caen
    const cajaCollider = this.add.rectangle(200, 100, 40, 40, 0x00ff00);
    const cajaOverlap = this.add.rectangle(600, 100, 40, 40, 0xffff00);
    this.physics.add.existing(cajaCollider);
    this.physics.add.existing(cajaOverlap);

    // --- LA MAGIA ---
    // Collider: Frena físicamente el objeto
    this.physics.add.collider(cajaCollider, suelo1);

    // Overlap: No lo frena, solo avisa cuando se cruzan
    this.physics.add.overlap(cajaOverlap, suelo2, () => {
      // Cuando se tocan, pintamos el suelo de rojo para que la clase lo vea
      suelo2.setFillStyle(0xff0000);
    });
  }
}