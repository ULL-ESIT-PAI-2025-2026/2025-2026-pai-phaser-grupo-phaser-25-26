import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/physics-examples/collider-overlap/main-scene.ts
var ColliderOverlapDemo;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	ColliderOverlapDemo = class extends __webpack_exports__Scene {
		constructor() {
			super("ColliderOverlapDemo");
		}
		/**
		* @desc Creates collider and overlap examples side by side for comparison.
		*/
		create() {
			const textY = 50;
			const leftColumnX = 200;
			const rightColumnX = 600;
			const fontSize = "20px";
			const centerOrigin = .5;
			this.add.text(leftColumnX, textY, "Collider (Choca)", { fontSize }).setOrigin(centerOrigin);
			this.add.text(rightColumnX, textY, "Overlap (Atraviesa)", { fontSize }).setOrigin(centerOrigin);
			const groundY = 400;
			const groundWidth = 200;
			const groundHeight = 20;
			const isStatic = true;
			const suelo1 = this.add.rectangle(leftColumnX, groundY, groundWidth, groundHeight, ColorName.GRAY);
			const suelo2 = this.add.rectangle(rightColumnX, groundY, groundWidth, groundHeight, ColorName.GRAY);
			this.physics.add.existing(suelo1, isStatic);
			this.physics.add.existing(suelo2, isStatic);
			const boxSpawnY = 100;
			const boxSize = 40;
			const cajaCollider = this.add.rectangle(leftColumnX, boxSpawnY, boxSize, boxSize, ColorName.GREEN);
			const cajaOverlap = this.add.rectangle(rightColumnX, boxSpawnY, boxSize, boxSize, ColorName.YELLOW);
			this.physics.add.existing(cajaCollider);
			this.physics.add.existing(cajaOverlap);
			this.physics.add.collider(cajaCollider, suelo1);
			this.physics.add.overlap(cajaOverlap, suelo2, () => {
				suelo2.setFillStyle(ColorName.RED);
			});
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
			parent: "ColliderOverlapDemo-app",
			scene: [ColliderOverlapDemo],
			backgroundColor: ColorName.BLACK,
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

//# sourceMappingURL=physicsCollider-CCVNxq3t.js.map