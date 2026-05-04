import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/scenes-examples/preload-fail/main-scene.ts
var MissingPreloadDemo;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	MissingPreloadDemo = class extends __webpack_exports__Scene {
		constructor() {
			super("MissingPreloadDemo");
		}
		/**
		* @desc Creates an image with a non-existent texture key to demonstrate fallback behavior.
		*/
		create() {
			const divider = 2;
			const midX = this.scale.width / divider;
			const midY = this.scale.height / divider;
			this.add.image(midX, midY, "imagen_que_no_existe");
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
			parent: "MissingPreloadDemo-app",
			scene: [MissingPreloadDemo],
			backgroundColor: ColorName.CYAN
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=scenePreloadFail-DN7FIkad.js.map