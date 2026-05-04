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
import { ColorName } from "../../../colors";

/**
 * @classdesc Scene representing the user interface overlay.
 */
export class UIScene extends Phaser.Scene {
  constructor() {
    super('UIScene');
  }

  /* Creates the UI elements including the background panel and text. */
  create(): void {
    const divider: number = 2;
    const midX: number = this.scale.width / divider;
    
    // Configuración del panel
    const panelY: number = 550;
    const panelWidth: number = 800;
    const panelHeight: number = 100;
    const panelAlpha: number = 0.7;

    const panel: Phaser.GameObjects.Rectangle = this.add.rectangle(
      midX, 
      panelY, 
      panelWidth, 
      panelHeight, 
      ColorName.BLACK, 
      panelAlpha
    );
    
    // Configuración del texto
    const fontSize: string = '28px';
    const textColor: string = 'yellow';
    const centerOrigin: number = 0.5;

    this.add.text(midX, panelY, 'SCORE: 1000 - ¡Soy una UI lanzada con launch!', { 
      fontSize: fontSize, 
      color: textColor 
    }).setOrigin(centerOrigin);
  }
}