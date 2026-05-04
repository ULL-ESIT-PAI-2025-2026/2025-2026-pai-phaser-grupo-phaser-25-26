import { a as __webpack_exports__Game, c as __webpack_exports__Scene, d as __esmMin, i as __webpack_exports__Events, l as init_phaser_esm, n as init_colors, r as __webpack_exports__AUTO, s as __webpack_exports__Physics, t as ColorName, u as __commonJSMin } from "./colors-Cj52N5Q7.js";
//#region src/phaser-platform-game/game/levels.ts
var LEVELS;
var init_levels = __esmMin((() => {
	LEVELS = [
		[
			"                                                                                ",
			"                                                                                ",
			"                                                                                ",
			"                                                                                ",
			"                                                                                ",
			"                                                                                ",
			"                                                                ###             ",
			"                                                   ##      ##    ##!##          ",
			"                                      o o      ##                 #!!!#         ",
			"                                                                 ##!##          ",
			"                                   #####                          #V#           ",
			"                                                                            ##  ",
			"  ##                                      o o                               #  ",
			"  #                      o                                                  #  ",
			"  #                                       #####                            o#  ",
			"  #  @       ####        o                                                  #  ",
			"  #          #  #                                            #####          #  ",
			"  ############  ###############    ####################      ##################",
			"                               #!!!#                  #!!!!!#                   ",
			"                               #!!!#                  #!!!!!#                   ",
			"                               #!!!#                  #!!!!!#                   ",
			"                               #####                  #######                   ",
			"                                                                                "
		],
		[
			"################################################################",
			"#                                                              #",
			"#      o                                  o            o       #",
			"#     ###       ###         !            ###          ###      #",
			"#   @                      ###                                 #",
			"# ####               !              !          !             E #",
			"#        #####     #####          #####      #####         #####",
			"################################################################"
		],
		[
			"########################",
			"#                      #",
			"#      o         o     #",
			"#     ###       ###    #",
			"#   @                  #",
			"# ####   !   !       E #",
			"#        #####     #####",
			"########################"
		],
		[
			"########################",
			"#  o             o     #",
			"# ###    !      ###    #",
			"#       ###            #",
			"#   @        !         #",
			"#  ###      ###      E #",
			"# !    !  !     !  #####",
			"########################"
		]
	];
}));
//#endregion
//#region src/phaser-platform-game/game/gameobjects/Player.ts
var Player;
var init_Player = __esmMin((() => {
	init_phaser_esm();
	Player = class extends __webpack_exports__Physics.Arcade.Sprite {
		keyboardInputCursors;
		HORIZONTAL_VELOCITY = 160;
		JUMP_VELOCITY = 330;
		RUN_ANIMATION_FRAME_RATE = 12;
		IDLE_ANIMATION_FRAME_RATE = 20;
		/**
		* @desc Constructor initializes the player sprite with physics and input handling.
		* @param scene - The Phaser scene instance containing this player.
		* @param x - Initial horizontal spawn position.
		* @param y - Initial vertical spawn position.
		*/
		constructor(scene, x, y) {
			super(scene, x, y, "player-sprite");
			scene.add.existing(this);
			scene.physics.add.existing(this);
			this.setDisplaySize(32, 48);
			this.setCollideWorldBounds(true);
			this.keyboardInputCursors = scene.input.keyboard.createCursorKeys();
			this.initializeAnimations(scene);
		}
		/**
		* @desc Creates animation definitions for player states (run, idle, jump).
		* @param scene - The scene containing animation definitions.
		*/
		initializeAnimations(scene) {
			if (!scene.anims.exists("run")) scene.anims.create({
				key: "run",
				frames: scene.anims.generateFrameNumbers("player-sprite", {
					start: 0,
					end: 9
				}),
				frameRate: this.RUN_ANIMATION_FRAME_RATE,
				repeat: -1
			});
			if (!scene.anims.exists("idle")) scene.anims.create({
				key: "idle",
				frames: [{
					key: "player-sprite",
					frame: 8
				}],
				frameRate: this.IDLE_ANIMATION_FRAME_RATE
			});
			if (!scene.anims.exists("jump")) scene.anims.create({
				key: "jump",
				frames: [{
					key: "player-sprite",
					frame: 9
				}],
				frameRate: this.IDLE_ANIMATION_FRAME_RATE
			});
		}
		/**
		* @desc Updates player state every frame: handles movement input, collision detection,
		* animation state, and jump physics.
		*/
		update() {
			const physicsBody = this.body;
			if (this.keyboardInputCursors.left?.isDown) {
				this.setVelocityX(-this.HORIZONTAL_VELOCITY);
				this.setFlipX(true);
			} else if (this.keyboardInputCursors.right?.isDown) {
				this.setVelocityX(this.HORIZONTAL_VELOCITY);
				this.setFlipX(false);
			} else this.setVelocityX(0);
			this.updateAnimationState(physicsBody);
			if (this.keyboardInputCursors.up?.isDown && physicsBody.blocked.down) this.setVelocityY(-this.JUMP_VELOCITY);
		}
		/**
		* @desc Updates the animation state based on player velocity and ground status.
		* @param physicsBody - The player's Arcade physics body.
		*/
		updateAnimationState(physicsBody) {
			if (!physicsBody.blocked.down) this.anims.play("jump", true);
			else if (physicsBody.velocity.x !== 0) this.anims.play("run", true);
			else this.anims.play("idle", true);
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/gameobjects/Wall.ts
var Wall;
var init_Wall = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	Wall = class extends __webpack_exports__Physics.Arcade.Sprite {
		/**
		* @desc Constructor initializes a wall sprite at the given position.
		* @param scene - The Phaser scene containing this wall.
		* @param x - Horizontal spawn position.
		* @param y - Vertical spawn position.
		*/
		constructor(scene, x, y) {
			super(scene, x, y, "main-sprites", 0);
			scene.add.existing(this);
			scene.physics.add.existing(this, true);
			this.setDisplaySize(32, 32);
			this.setTint(ColorName.GRAY);
			this.body.updateFromGameObject();
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/gameobjects/Coin.ts
var Coin;
var init_Coin = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	Coin = class extends __webpack_exports__Physics.Arcade.Sprite {
		/**
		* @desc Constructor initializes a coin sprite at the given position.
		* @param scene - The Phaser scene containing this coin.
		* @param x - Horizontal spawn position.
		* @param y - Vertical spawn position.
		*/
		constructor(scene, x, y) {
			super(scene, x, y, "coin-texture", 0);
			scene.add.existing(this);
			scene.physics.add.existing(this, true);
			this.setDisplaySize(20, 20);
			this.setTint(ColorName.YELLOW);
			this.body.updateFromGameObject();
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/gameobjects/Lava.ts
var Lava;
var init_Lava = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	Lava = class extends __webpack_exports__Physics.Arcade.Sprite {
		/**
		* @desc Constructor initializes a lava sprite at the given position.
		* @param scene - The Phaser scene containing this lava.
		* @param x - Horizontal spawn position.
		* @param y - Vertical spawn position.
		*/
		constructor(scene, x, y) {
			super(scene, x, y, "main-sprites", 1);
			scene.add.existing(this);
			scene.physics.add.existing(this, true);
			this.setDisplaySize(32, 32);
			this.setTint(ColorName.RED);
			this.body.updateFromGameObject();
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/gameobjects/Exit.ts
var Exit;
var init_Exit = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	Exit = class extends __webpack_exports__Physics.Arcade.Sprite {
		/**
		* @desc Constructor initializes an exit sprite at the given position.
		* @param scene - The Phaser scene containing this exit.
		* @param x - Horizontal spawn position.
		* @param y - Vertical spawn position.
		*/
		constructor(scene, x, y) {
			super(scene, x, y, "");
			scene.add.existing(this);
			scene.physics.add.existing(this, true);
			this.setDisplaySize(32, 32);
			this.setTint(ColorName.BLUE);
			this.body.updateFromGameObject();
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/gameobjects/LavaFalling.ts
var LavaFalling;
var init_LavaFalling = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	LavaFalling = class extends __webpack_exports__Physics.Arcade.Sprite {
		initialSpawnX;
		initialSpawnY;
		respawnTimerEvent;
		FALL_SPAWN_INTERVAL = 3e3;
		FALL_VELOCITY = 200;
		/**
		* @desc Constructor initializes a falling lava spawner at the given position.
		* @param scene - The Phaser scene containing this lava spawner.
		* @param x - Horizontal spawn position.
		* @param y - Vertical spawn position.
		*/
		constructor(scene, x, y) {
			super(scene, x, y, "main-sprites", 1);
			this.initialSpawnX = x;
			this.initialSpawnY = y;
			scene.add.existing(this);
			scene.physics.add.existing(this, false);
			this.setDisplaySize(20, 32);
			this.setTint(ColorName.ORANGE);
			this.startFallingCycle();
		}
		/**
		* @desc Initializes the falling cycle and creates the respawn timer.
		*/
		startFallingCycle() {
			this.spawnLavaDroplet();
			this.respawnTimerEvent = this.scene.time.addEvent({
				delay: this.FALL_SPAWN_INTERVAL,
				callback: this.spawnLavaDroplet,
				callbackScope: this,
				loop: true
			});
		}
		/**
		* @desc Spawns a new lava droplet at the initial position with downward velocity.
		*/
		spawnLavaDroplet() {
			if (!this.scene || !this.scene.sys) return;
			this.setActive(true);
			this.setVisible(true);
			const physicsBody = this.body;
			physicsBody.setEnable(true);
			this.setPosition(this.initialSpawnX, this.initialSpawnY);
			physicsBody.reset(this.initialSpawnX, this.initialSpawnY);
			physicsBody.setVelocityY(this.FALL_VELOCITY);
		}
		/**
		* @desc Deactivates the lava droplet when it hits an obstacle,
		* disabling physics simulation until next respawn.
		*/
		deactivate() {
			this.setActive(false);
			this.setVisible(false);
			const physicsBody = this.body;
			physicsBody.stop();
			physicsBody.setEnable(false);
		}
		/**
		* @desc Cleanup method to remove timer event when the sprite is destroyed.
		* @param fromScene - Whether destruction is triggered from scene cleanup.
		*/
		destroy(fromScene) {
			if (this.respawnTimerEvent) this.respawnTimerEvent.destroy();
			super.destroy(fromScene);
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/builders/LevelBuilder.ts
var LevelBuilder;
var init_LevelBuilder = __esmMin((() => {
	init_Player();
	init_Wall();
	init_Coin();
	init_Lava();
	init_Exit();
	init_LavaFalling();
	LevelBuilder = class {
		/**
		* @desc Constructs a complete level from tilemap string data.
		* Each character represents a different game object type.
		*
		* @param scene - The Phaser scene where level objects are created.
		* @param levelData - Array of strings representing the level tilemap.
		* @returns An object containing all built level components (player, groups, etc).
		*
		* @example
		* levelData = [
		*   '#####',
		*   '#@o!#',
		*   '#E V#',
		*   '#####'
		* ]
		*
		*/
		static build(scene, levelData) {
			const wallGroup = scene.physics.add.staticGroup();
			const coinGroup = scene.physics.add.staticGroup();
			const staticLavaGroup = scene.physics.add.staticGroup();
			const exitGroup = scene.physics.add.staticGroup();
			const fallingLavaGroup = scene.physics.add.group();
			let playerCharacter;
			levelData.forEach((rowString, rowIndex) => {
				[...rowString].forEach((tileCharacter, columnIndex) => {
					const pixelX = columnIndex * 32 + 16;
					const pixelY = rowIndex * 32 + 16;
					if (tileCharacter === "@") playerCharacter = new Player(scene, pixelX, pixelY);
					else if (tileCharacter === "#") wallGroup.add(new Wall(scene, pixelX, pixelY));
					else if (tileCharacter === "o") coinGroup.add(new Coin(scene, pixelX, pixelY));
					else if (tileCharacter === "!") staticLavaGroup.add(new Lava(scene, pixelX, pixelY));
					else if (tileCharacter === "E") exitGroup.add(new Exit(scene, pixelX, pixelY));
					else if (tileCharacter === "V") fallingLavaGroup.add(new LavaFalling(scene, pixelX, pixelY));
				});
			});
			const mapWidthInPixels = levelData[0].length * 32;
			const mapHeightInPixels = levelData.length * 32;
			scene.physics.world.setBounds(0, 0, mapWidthInPixels, mapHeightInPixels);
			if (playerCharacter) {
				scene.cameras.main.setBounds(0, 0, mapWidthInPixels, mapHeightInPixels);
				scene.cameras.main.startFollow(playerCharacter, true, .08, .08);
			}
			return {
				player: playerCharacter,
				walls: wallGroup,
				coins: coinGroup,
				lavaStatic: staticLavaGroup,
				lavaFallingGroup: fallingLavaGroup,
				exits: exitGroup
			};
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/events/EventCenter.ts
var eventCenter;
var init_EventCenter = __esmMin((() => {
	init_phaser_esm();
	eventCenter = new __webpack_exports__Events.EventEmitter();
}));
//#endregion
//#region src/phaser-platform-game/game/state/GameState.ts
var GameState, gameState;
var init_GameState = __esmMin((() => {
	init_EventCenter();
	GameState = class {
		lives = 3;
		currentLevelIndex = 0;
		coins = 0;
		secondsElapsed = 0;
		/**
		* @desc Resets all game state to initial values.
		*/
		resetGame() {
			this.lives = 3;
			this.currentLevelIndex = 0;
			this.coins = 0;
			this.secondsElapsed = 0;
			eventCenter.emit("update-lives", this.lives);
			eventCenter.emit("update-coins", this.coins);
			eventCenter.emit("update-timer", this.secondsElapsed);
		}
		/**
		* @desc Resets game state after player death (all lives lost).
		*/
		resetByDead() {
			this.lives = 3;
			this.currentLevelIndex = 0;
			this.coins = 0;
			this.secondsElapsed = 0;
			eventCenter.emit("update-lives", this.lives);
			eventCenter.emit("update-coins", this.coins);
			eventCenter.emit("update-timer", this.secondsElapsed);
		}
		/**
		* @desc Advances to the next level index.
		*/
		nextLevel() {
			this.currentLevelIndex++;
		}
		/**
		* @desc Checks if the player has no remaining lives.
		* @returns True if lives are zero or less.
		*/
		isGameOver() {
			return this.lives <= 0;
		}
		/**
		* @desc Increments the coin counter and emits an update event.
		*/
		addCoin() {
			this.coins++;
			eventCenter.emit("update-coins", this.coins);
		}
		/**
		* @desc Formats elapsed seconds as MM:SS string.
		* @returns Formatted time string.
		*/
		getFormattedTime() {
			const minutes = Math.floor(this.secondsElapsed / 60);
			const seconds = this.secondsElapsed % 60;
			return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
		}
		/**
		* @desc Decrements lives and resets coins on death; emits update events.
		*/
		loseLife() {
			this.lives--;
			this.coins = 0;
			eventCenter.emit("update-coins", this.coins);
			eventCenter.emit("update-lives", this.lives);
		}
	};
	gameState = new GameState();
}));
//#endregion
//#region src/phaser-platform-game/game/scenes/GameScene.ts
var GameScene;
var init_GameScene = __esmMin((() => {
	init_phaser_esm();
	init_levels();
	init_LevelBuilder();
	init_GameState();
	init_EventCenter();
	GameScene = class extends __webpack_exports__Scene {
		playerCharacter;
		wallGroup;
		coinGroup;
		staticLavaGroup;
		fallingLavaGroup;
		exitGroup;
		gameTimerEvent;
		isDead = false;
		constructor() {
			super("GameScene");
		}
		preload() {
			const repositoryBasePath = "/2025-2026-pai-phaser-joseangel-kyliam-alejandro/";
			this.load.image("coin-texture", `${repositoryBasePath}assets/img/coin.png`);
			this.load.spritesheet("main-sprites", `${repositoryBasePath}assets/img/sprites.png`, {
				frameWidth: 16,
				frameHeight: 16,
				endFrame: 2
			});
			this.load.spritesheet("player-sprite", `${repositoryBasePath}assets/img/player.png`, {
				frameWidth: 24,
				frameHeight: 30
			});
			this.load.on("filecomplete-spritesheet-main-sprites", () => {
				console.log("✅ Spritesheet cargado con éxito usando la ruta base de Vite");
			});
		}
		get audioManager() {
			return this.scene.get("MusicScene");
		}
		create() {
			this.isDead = false;
			if (!this.scene.isActive("UIScene")) this.scene.launch("UIScene");
			if (!this.scene.isActive("MusicScene")) this.scene.launch("MusicScene");
			const currentLevelData = LEVELS[gameState.currentLevelIndex];
			const builtLevelObjects = LevelBuilder.build(this, currentLevelData);
			this.playerCharacter = builtLevelObjects.player;
			this.wallGroup = builtLevelObjects.walls;
			this.coinGroup = builtLevelObjects.coins;
			this.staticLavaGroup = builtLevelObjects.lavaStatic;
			this.fallingLavaGroup = builtLevelObjects.lavaFallingGroup;
			this.exitGroup = builtLevelObjects.exits;
			this.input.keyboard?.on("keydown-P", () => {
				this.scene.pause();
				this.scene.launch("PauseScene");
			});
			this.gameTimerEvent = this.time.addEvent({
				delay: 1e3,
				callback: () => {
					gameState.secondsElapsed++;
					eventCenter.emit("update-timer");
				},
				loop: true
			});
			this.setupCollisionHandlers();
		}
		update() {
			if (this.playerCharacter) this.playerCharacter.update();
		}
		setupCollisionHandlers() {
			this.physics.add.collider(this.playerCharacter, this.wallGroup);
			this.physics.add.overlap(this.fallingLavaGroup, this.wallGroup, (lavaObject) => {
				lavaObject.deactivate();
			});
			this.physics.add.overlap(this.playerCharacter, this.coinGroup, (_, coin) => {
				coin.destroy();
				gameState.addCoin();
				this.audioManager.playCoinSound();
			});
			this.physics.add.overlap(this.playerCharacter, this.staticLavaGroup, () => this.handlePlayerDeath());
			this.physics.add.overlap(this.playerCharacter, this.fallingLavaGroup, () => this.handlePlayerDeath());
			this.physics.add.overlap(this.playerCharacter, this.exitGroup, () => this.handleLevelCompletion());
		}
		handlePlayerDeath() {
			if (this.isDead) return;
			this.isDead = true;
			this.physics.pause();
			gameState.loseLife();
			if (gameState.isGameOver()) {
				console.log("Game Over - No vidas restantes");
				this.audioManager.stopBackgroundMusic();
				this.audioManager.playGameOverSound();
				gameState.resetByDead();
				this.scene.restart();
			} else {
				this.audioManager.playDeathSound();
				this.scene.restart();
			}
		}
		handleLevelCompletion() {
			gameState.nextLevel();
			this.audioManager.stopBackgroundMusic();
			if (gameState.currentLevelIndex < LEVELS.length) {
				this.audioManager.playStageClearSound();
				this.scene.restart();
			} else {
				console.log("¡Juego completado!");
				this.audioManager.playWorldClearSound();
				gameState.resetGame();
				this.scene.restart();
			}
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/scenes/UIScene.ts
var UIScene;
var init_UIScene = __esmMin((() => {
	init_phaser_esm();
	init_EventCenter();
	init_GameState();
	init_colors();
	UIScene = class extends __webpack_exports__Scene {
		livesDisplayText;
		coinsDisplayText;
		timerDisplayText;
		constructor() {
			super("UIScene");
		}
		/**
		* @desc Initializes UI elements and registers event listeners for state updates.
		*/
		create() {
			this.livesDisplayText = this.add.text(20, 20, `Vidas: ${gameState.lives}`, { fontSize: "24px" });
			this.coinsDisplayText = this.add.text(20, 50, `Monedas: ${gameState.coins}`, {
				fontSize: "24px",
				color: `${ColorName.YELLOW}`
			});
			this.timerDisplayText = this.add.text(780, 20, `Tiempo: 00:00`, { fontSize: "24px" }).setOrigin(1, 0);
			eventCenter.on("update-lives", (updatedLivesCount) => {
				this.livesDisplayText.setText(`Vidas: ${updatedLivesCount}`);
			});
			eventCenter.on("update-coins", (updatedCoinCount) => {
				this.coinsDisplayText.setText(`Monedas: ${updatedCoinCount}`);
			});
			eventCenter.on("update-timer", () => {
				this.timerDisplayText.setText(`Tiempo: ${gameState.getFormattedTime()}`);
			});
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/scenes/PauseScene.ts
var PauseScene;
var init_PauseScene = __esmMin((() => {
	init_phaser_esm();
	init_GameState();
	init_colors();
	PauseScene = class extends __webpack_exports__Scene {
		/**
		* @desc Instantiates the PauseScene with its unique Phaser key identifier.
		*/
		constructor() {
			super("PauseScene");
		}
		/**
		* @desc Creates the pause menu with semi-transparent overlay and control buttons.
		*/
		create() {
			const canvasWidth = this.scale.width;
			const canvasHeight = this.scale.height;
			this.add.rectangle(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight, ColorName.BLACK, .6);
			this.add.text(canvasWidth / 2, canvasHeight / 2 - 50, "PAUSA", { fontSize: "48px" }).setOrigin(.5);
			const resumeButton = this.add.text(canvasWidth / 2, canvasHeight / 2 + 50, "RESUME (P)", {
				fontSize: "32px",
				color: `${ColorName.GREEN}`
			}).setOrigin(.5).setInteractive({ useHandCursor: true });
			const restartButton = this.add.text(canvasWidth / 2, canvasHeight / 2 + 110, "RESTART", {
				fontSize: "32px",
				color: `${ColorName.RED}`
			}).setOrigin(.5).setInteractive({ useHandCursor: true });
			resumeButton.on("pointerdown", () => this.resumeGameplay());
			restartButton.on("pointerdown", () => this.restartGameplay());
			this.input.keyboard?.on("keydown-P", () => this.resumeGameplay());
		}
		/**
		* @desc Resumes the paused game session and closes the pause menu.
		*/
		resumeGameplay() {
			this.scene.resume("GameScene");
			this.scene.stop();
		}
		/**
		* @desc Restarts the game from the beginning, resetting all game state and progress.
		*/
		restartGameplay() {
			gameState.resetGame();
			this.scene.stop("GameScene");
			this.scene.start("GameScene");
			this.scene.stop();
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/scenes/music_scene.ts
var SOUND_PATH, MusicScene;
var init_music_scene = __esmMin((() => {
	init_phaser_esm();
	SOUND_PATH = "/2025-2026-pai-phaser-joseangel-kyliam-alejandro/assets/sound/";
	MusicScene = class MusicScene extends __webpack_exports__Scene {
		static BACKGROUND_VOLUME = .3;
		backgroundMusic;
		/**
		* @desc Instantiates the MusicScene with its unique Phaser key identifier.
		*/
		constructor() {
			super("MusicScene");
		}
		/**
		* @desc Loads all sound assets into the audio cache from the file system.
		*/
		preload() {
			this.load.audio("background", SOUND_PATH + "201-overworld-bgm.mp3");
			this.load.audio("coin", SOUND_PATH + "smb_coin.wav");
			this.load.audio("fireworks", SOUND_PATH + "smb_fireworks.wav");
			this.load.audio("gameOver", SOUND_PATH + "smb_gameover.wav");
			this.load.audio("jump", SOUND_PATH + "smb_jump-small.wav");
			this.load.audio("death", SOUND_PATH + "smb_mariodie.wav");
			this.load.audio("stageClear", SOUND_PATH + "smb_stage_clear.wav");
			this.load.audio("worldClear", SOUND_PATH + "smb_world_clear.wav");
		}
		/**
		* @desc Initializes the audio manager and starts background music playback.
		*/
		create() {
			this.playBackgroundMusic();
		}
		/**
		* @desc Plays background music if not already playing, or resumes if paused.
		*/
		playBackgroundMusic() {
			if (!this.backgroundMusic) this.createBackgroundMusic();
			if (this.backgroundMusic?.isPlaying) return;
			if (this.backgroundMusic?.isPaused) {
				this.backgroundMusic.resume();
				return;
			}
			this.backgroundMusic?.play();
		}
		/**
		* @desc Plays the coin collection sound effect.
		*/
		playCoinSound() {
			this.sound.play("coin");
		}
		/**
		* @desc Plays the fireworks celebration sound effect.
		*/
		playFireworksSound() {
			this.sound.play("fireworks");
		}
		/**
		* @desc Plays the game over defeat sound effect.
		*/
		playGameOverSound() {
			this.sound.play("gameOver");
		}
		/**
		* @desc Plays the jump action sound effect.
		*/
		playJumpSound() {
			this.sound.play("jump");
		}
		/**
		* @desc Plays the player death sound effect.
		*/
		playDeathSound() {
			this.sound.play("death");
		}
		/**
		* @desc Plays the stage/level completion jingle.
		*/
		playStageClearSound() {
			this.sound.play("stageClear");
		}
		/**
		* @desc Plays the world/game completion victory jingle.
		*/
		playWorldClearSound() {
			this.sound.play("worldClear");
		}
		/**
		* @desc Pauses background music playback without stopping it.
		*/
		pauseBackgroundMusic() {
			this.backgroundMusic?.pause();
		}
		/**
		* @desc Resumes background music from paused state.
		*/
		resumeBackgroundMusic() {
			this.backgroundMusic?.resume();
		}
		/**
		* @desc Completely stops background music playback.
		*/
		stopBackgroundMusic() {
			this.backgroundMusic?.stop();
		}
		/**
		* @desc Mutes all sound and music output globally.
		*/
		muteSounds() {
			this.sound.mute = true;
		}
		/**
		* @desc Unmutes all sound and music output globally.
		*/
		unmuteSounds() {
			this.sound.mute = false;
		}
		/**
		* @desc Toggles the global mute state of all audio.
		*/
		toggleMute() {
			this.sound.mute = !this.sound.mute;
		}
		/**
		* @desc Creates and configures the background music audio object for looping playback.
		*/
		createBackgroundMusic() {
			this.backgroundMusic = this.sound.add("background", {
				loop: true,
				volume: MusicScene.BACKGROUND_VOLUME
			});
		}
	};
}));
//#endregion
//#region src/phaser-platform-game/game/game.ts
/**
* Initializes and starts the Phaser game with the specified container element.
* Configures the game engine, physics world, and scene management.
*
* @param containerId - The HTML element ID where the game canvas will be rendered.
*/
function StartGame(containerId) {
	new __webpack_exports__Game({
		type: __webpack_exports__AUTO,
		width: 800,
		height: 600,
		parent: containerId,
		backgroundColor: ColorName.SKY_BLUE,
		physics: {
			default: "arcade",
			arcade: {
				gravity: {
					x: 0,
					y: 300
				},
				debug: false
			}
		},
		scene: [
			GameScene,
			UIScene,
			PauseScene,
			MusicScene
		]
	});
}
var init_game = __esmMin((() => {
	init_phaser_esm();
	init_colors();
	init_GameScene();
	init_UIScene();
	init_PauseScene();
	init_music_scene();
}));
(/* @__PURE__ */ __commonJSMin((() => {
	init_game();
	/**
	* @desc Initialises and starts the game inside the given container element.
	*/
	function main() {
		StartGame("game-container");
	}
	main();
})))();
//#endregion

//# sourceMappingURL=platformGame-n9ZmUAh9.js.map