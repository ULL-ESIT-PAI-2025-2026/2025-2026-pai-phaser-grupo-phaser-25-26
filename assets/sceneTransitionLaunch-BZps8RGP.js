import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/scenes-examples/transition-scenes/launch/main-scene.ts
var MainScene;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	MainScene = class extends __webpack_exports__Scene {
		cuadrado;
		constructor() {
			super("MainScene");
		}
		create() {
			const midX = this.scale.width / 2;
			this.add.text(midX, 50, "Escena de Juego (Corriendo...)", { fontSize: "24px" }).setOrigin(.5);
			const spawnX = 100;
			const spawnY = 300;
			const size = 50;
			this.cuadrado = this.add.rectangle(spawnX, spawnY, size, size, ColorName.GREEN);
			const launchDelay = 2e3;
			const uiSceneKey = "UIScene";
			this.time.delayedCall(launchDelay, () => {
				console.log("Lanzando la interfaz (Overlay)...");
				this.scene.launch(uiSceneKey);
			});
		}
		/**
		* @desc Moves the rectangle horizontally across the screen each frame.
		*/
		update() {
			const velocity = 2;
			const worldBounds = 800;
			const resetPosition = 0;
			this.cuadrado.x += velocity;
			if (this.cuadrado.x > worldBounds) this.cuadrado.x = resetPosition;
		}
	};
}));
//#endregion
//#region src/scenes-examples/transition-scenes/launch/UIScene.ts
var UIScene;
var init_UIScene = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	UIScene = class extends __webpack_exports__Scene {
		constructor() {
			super("UIScene");
		}
		/**
		* @desc Creates a semi-transparent overlay panel with score text.
		*/
		create() {
			const midX = this.scale.width / 2;
			const panelY = 550;
			this.add.rectangle(midX, panelY, 800, 100, ColorName.BLACK, .7);
			this.add.text(midX, panelY, "SCORE: 1000 - ¡Soy una UI lanzada con launch!", {
				fontSize: "28px",
				color: `${ColorName.YELLOW}`
			}).setOrigin(.5);
		}
	};
}));
(/* @__PURE__ */ __commonJSMin((() => {
	init_phaser_esm();
	init_main_scene();
	init_UIScene();
	function startGame() {
		new __webpack_exports__Game({
			type: __webpack_exports__AUTO,
			width: 800,
			height: 600,
			parent: "game-container",
			scene: [MainScene, UIScene]
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=sceneTransitionLaunch-BZps8RGP.js.map