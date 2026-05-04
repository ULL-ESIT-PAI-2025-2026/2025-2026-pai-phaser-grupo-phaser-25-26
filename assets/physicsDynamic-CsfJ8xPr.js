import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/physics-examples/dynamic-static/main-scene.ts
var DinamicoEstaticoDemo;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	DinamicoEstaticoDemo = class extends __webpack_exports__Scene {
		constructor() {
			super("DinamicoEstaticoDemo");
		}
		/**
		* @desc Creates dynamic and static physics bodies to demonstrate their differences.
		*/
		create() {
			const midX = this.scale.width / 2;
			this.add.text(midX, 50, "Izquierda: Dinámico | Derecha: Estático", { fontSize: "24px" }).setOrigin(.5);
			const boxY = 200;
			const boxSize = 50;
			const dynamicBoxX = 200;
			const staticBoxX = 600;
			const cajaDinamica = this.add.rectangle(dynamicBoxX, boxY, boxSize, boxSize, ColorName.RED);
			this.physics.add.existing(cajaDinamica);
			const muroEstatico = this.add.rectangle(staticBoxX, boxY, boxSize, boxSize, ColorName.GRAY);
			this.physics.add.existing(muroEstatico, true);
		}
	};
}));
(/* @__PURE__ */ __commonJSMin((() => {
	init_phaser_esm();
	init_colors();
	init_main_scene();
	/**
	* Initializes and starts the Phaser game instance.
	*/
	function startGame() {
		new __webpack_exports__Game({
			type: __webpack_exports__AUTO,
			width: 800,
			height: 600,
			parent: "DinamicoEstaticoDemo-app",
			scene: [DinamicoEstaticoDemo],
			backgroundColor: ColorName.CYAN,
			physics: {
				default: "arcade",
				arcade: {
					gravity: {
						y: 300,
						x: 0
					},
					debug: true
				}
			}
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=physicsDynamic-CsfJ8xPr.js.map