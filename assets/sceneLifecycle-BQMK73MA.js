import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/scenes-examples/life-cycle/main-scene.ts
var LifecycleDemo;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	LifecycleDemo = class extends __webpack_exports__Scene {
		constructor() {
			super("LifecycleDemo");
		}
		/**
		* @desc First lifecycle phase: initializes variables and data.
		*/
		init() {
			console.log("1. INIT: Preparando el escenario (Variables y datos)");
		}
		/**
		* @desc Second lifecycle phase: loads images and sounds.
		*/
		preload() {
			console.log("2. PRELOAD: Descargando imágenes y sonidos de internet");
		}
		/**
		* @desc Third lifecycle phase: creates game objects.
		*/
		create() {
			console.log("3. CREATE: Poniendo a los actores en el escenario");
		}
		/**
		* @desc Fourth lifecycle phase: runs every frame (empty in this demo).
		*/
		update() {}
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
			parent: "LifecycleDemo-app",
			scene: [LifecycleDemo],
			backgroundColor: ColorName.CYAN
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=sceneLifecycle-BQMK73MA.js.map