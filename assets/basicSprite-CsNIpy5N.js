import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, l as init_phaser_esm, n as init_colors, o as __webpack_exports__GameObjects, r as __webpack_exports__AUTO, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/game-objects-examples/basic-sprite/sprite-class.ts
var SpriteClass;
var init_sprite_class = __esmMin((() => {
	init_phaser_esm();
	SpriteClass = class extends __webpack_exports__GameObjects.Sprite {
		/**
		* @param scene The Phaser scene.
		* @param texture The key of the spritesheet.
		*/
		constructor(scene, texture) {
			const divider = 2;
			const midX = scene.scale.width / divider;
			const midY = scene.scale.height / divider;
			super(scene, midX, midY, texture);
			const defaultOrigin = .5;
			const defaultScale = 2;
			this.setOrigin(defaultOrigin);
			this.setScale(defaultScale);
			scene.add.existing(this);
			this.initAnimations();
		}
		initAnimations() {
			if (!this.scene.anims.exists("walk")) this.scene.anims.create({
				key: "walk",
				frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
					start: 0,
					end: 7
				}),
				frameRate: 10,
				repeat: -1
			});
			this.play("walk");
		}
	};
}));
//#endregion
//#region src/game-objects-examples/basic-sprite/main-scene.ts
var MainScene;
var init_main_scene = __esmMin((() => {
	init_phaser_esm();
	init_sprite_class();
	MainScene = class extends __webpack_exports__Scene {
		constructor() {
			super("MainScene");
		}
		preload() {
			this.load.spritesheet("player", `/2025-2026-pai-phaser-joseangel-kyliam-alejandro/assets/img/player.png`, {
				frameWidth: 24,
				frameHeight: 30
			});
		}
		create() {
			new SpriteClass(this, "player");
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
			parent: "sprite-app",
			scene: [MainScene],
			backgroundColor: ColorName.CYAN
		});
	}
	startGame();
})))();
//#endregion

//# sourceMappingURL=basicSprite-CsNIpy5N.js.map