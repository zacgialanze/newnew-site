/*
 * Everest Love Run — game integration for the wedding site
 *
 * This file contains the game logic from the standalone Everest Love Run
 * mini‑game. It has been adapted slightly so that the game does not
 * automatically start when the script loads. Instead, a function
 * `startEverestLoveRun()` is attached to the global `window` object
 * which can be called to begin the game. This allows the wedding site
 * to control when the game begins (e.g. after a user clicks the
 * “Start Game” button in the RSVP section). All of the original
 * behaviour, visuals and scoring remain unchanged.
 */

(() => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  // References to scoreboard DOM elements
  const scoreBoard = document.getElementById('scoreBoard');
  const finalMessageEl = document.getElementById('finalMessage');
  const finalScoreEl = document.getElementById('finalScore');
  const finalRingsEl = document.getElementById('finalRings');
  const finalHeartsEl = document.getElementById('finalHearts');
  const restartButton = document.getElementById('restartButton');

  // Track keyboard input
  const keys = {};
  document.addEventListener('keydown', e => {
    keys[e.key] = true;
  });
  document.addEventListener('keyup', e => {
    keys[e.key] = false;
  });

  // Define the file paths for all images used in the game.
  const assetFiles = {
    backgroundMountain: 'game-assets/mountain_background.png',
    backgroundUK: 'game-assets/uk_background.png',
    backgroundAustralia: 'game-assets/australia_background.png',
    van: 'game-assets/yellow_van.png',
    heart: 'game-assets/heart.png',
    rings: 'game-assets/rings.png',
    letter: 'game-assets/letter.png'
  };

  /**
   * Preload all image assets before starting the game. Calls the callback
   * function once every image has successfully loaded.
   *
   * @param {Object} files - A mapping of asset keys to file paths.
   * @param {Function} callback - Called with the loaded images object when done.
   */
  function loadAssets(files, callback) {
    const images = {};
    let loaded = 0;
    const total = Object.keys(files).length;
    Object.keys(files).forEach(key => {
      const img = new Image();
      img.src = files[key];
      img.onload = () => {
        images[key] = img;
        loaded++;
        if (loaded === total) {
          callback(images);
        }
      };
      img.onerror = () => {
        console.error('Failed to load image:', files[key]);
      };
    });
  }

  /**
   * Represents the player‑controlled van. Handles movement, drawing and
   * collision detection.
   */
  class Player {
    constructor(img) {
      this.img = img;
      this.width = 80;
      this.height = 50;
      this.speed = 320; // Movement speed in pixels per second
      this.x = 0;
      this.y = 0;
    }
    /**
     * Reset the van's position based on the current stage orientation. For a
     * vertical stage it sits near the bottom centre; for horizontal stages it
     * sits near the left centre.
     * @param {string} orientation Either 'vertical' or 'horizontal'.
     */
    resetPosition(orientation) {
      if (orientation === 'vertical') {
        this.x = (canvas.width - this.width) / 2;
        this.y = canvas.height - this.height - 20;
      } else {
        this.x = 20;
        this.y = (canvas.height - this.height) / 2;
      }
    }
    /**
     * Update the player's position based on keyboard input. Constrains the
     * player inside the canvas bounds.
     * @param {number} dt Delta time in seconds since last update.
     */
    update(dt) {
      // Horizontal movement
      if (keys['ArrowLeft'] || keys['a']) {
        this.x -= this.speed * dt;
      }
      if (keys['ArrowRight'] || keys['d']) {
        this.x += this.speed * dt;
      }
      // Vertical movement
      if (keys['ArrowUp'] || keys['w']) {
        this.y -= this.speed * dt;
      }
      if (keys['ArrowDown'] || keys['s']) {
        this.y += this.speed * dt;
      }
      // Constrain to canvas
      this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));
      this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));
    }
    /**
     * Draw the van onto the canvas at its current position.
     */
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    /**
     * Test whether this player intersects another rectangular object.
     * @param {Object} obj The other object with x, y, width and height properties.
     * @returns {boolean} True if a collision occurs.
     */
    intersects(obj) {
      return !(this.x + this.width < obj.x || obj.x + obj.width < this.x ||
               this.y + this.height < obj.y || obj.y + obj.height < this.y);
    }
  }

  /**
   * Draw a heart shape directly onto the canvas. Used for obstacles to avoid
   * relying on an image with a coloured background. The heart is drawn
   * proportionally based on the supplied width and height.
   *
   * @param {CanvasRenderingContext2D} ctx The 2D drawing context.
   * @param {number} x The x‑coordinate of the top left corner.
   * @param {number} y The y‑coordinate of the top left corner.
   * @param {number} width The width of the heart.
   * @param {number} height The height of the heart.
   */
  function drawHeartShape(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    const topCurveHeight = height * 0.3;
    ctx.moveTo(width / 2, height);
    // bottom point
    ctx.bezierCurveTo(width * 1.25, height * 0.6, width * 0.8, height * 0.1, width / 2, topCurveHeight);
    ctx.bezierCurveTo(width * 0.2, height * 0.1, -width * 0.25, height * 0.6, width / 2, height);
    ctx.closePath();
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    ctx.restore();
  }

  class Entity {
    /**
     * Create a moving entity. It can be drawn either via an image or via a
     * special drawing routine (for hearts). The `specialType` field allows
     * different behaviours for different entities.
     *
     * @param {HTMLImageElement} img The image used to draw the entity (may be null for hearts).
     * @param {number} x Starting x position.
     * @param {number} y Starting y position.
     * @param {number} velX Horizontal velocity in pixels per second.
     * @param {number} velY Vertical velocity in pixels per second.
     * @param {number} size Base width/height of the entity.
     * @param {string|null} specialType Optional special type (e.g. 'heart').
     */
    constructor(img, x, y, velX, velY, size, specialType = null) {
      this.img = img;
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.width = size;
      this.height = size;
      this.specialType = specialType;
    }
    update(dt) {
      this.x += this.velX * dt;
      this.y += this.velY * dt;
    }
    draw() {
      if (this.specialType === 'heart') {
        drawHeartShape(ctx, this.x, this.y, this.width, this.height);
      } else {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    offscreen() {
      return this.x + this.width < 0 || this.x > canvas.width || this.y > canvas.height;
    }
  }

  // Game state variables
  let stages;
  let currentStageIndex;
  let currentStage;
  let stageProgress;
  let bgOffsetX;
  let bgOffsetY;
  let hearts;
  let collectibles;
  let heartSpawnTimer;
  let collectibleSpawnTimer;
  let health;
  let ringsCollected;
  let heartsHit;
  let score;
  let loadedImages;
  let lastTimestamp;
  let player;
  let gameRunning = false;

  /**
   * Set up the entire game after all assets have loaded. Defines stages,
   * instantiates the player and attaches event handlers.
   * @param {Object} images The collection of preloaded images.
   */
  function initGame(images) {
    loadedImages = images;
    // Define each stage: name, background image, scrolling orientation and length
    stages = [
      {
        name: 'Everest Ascent',
        background: images.backgroundMountain,
        orientation: 'vertical',
        length: 3000,
        speed: 120
      },
      {
        name: 'UK Flight',
        background: images.backgroundUK,
        orientation: 'horizontal',
        length: 3500,
        speed: 160
      },
      {
        name: 'Australian Flight',
        background: images.backgroundAustralia,
        orientation: 'horizontal',
        length: 3500,
        speed: 160
      }
    ];
    // Create player instance
    player = new Player(images.van);
    // Attach restart button handler
    restartButton.addEventListener('click', () => {
      scoreBoard.style.display = 'none';
      restartGame();
    });
    // Initialise the first game
    restartGame();
    // Start the main animation loop
    requestAnimationFrame(gameLoop);
  }

  /**
   * Restart the game by resetting all stage and player properties.
   */
  function restartGame() {
    currentStageIndex = 0;
    currentStage = stages[currentStageIndex];
    stageProgress = 0;
    bgOffsetX = 0;
    bgOffsetY = 0;
    hearts = [];
    collectibles = [];
    heartSpawnTimer = 0;
    collectibleSpawnTimer = 0;
    health = 3;
    ringsCollected = 0;
    heartsHit = 0;
    score = 0;
    player.resetPosition(currentStage.orientation);
    lastTimestamp = undefined;
    gameRunning = true;
  }

  /**
   * Spawn a new heart obstacle at a random position along the appropriate
   * axis for the current stage. Hearts fall downwards on vertical stages
   * and travel leftwards on horizontal stages.
   */
  function spawnHeart() {
    const size = 40 + Math.random() * 25;
    let x, y, velX, velY;
    if (currentStage.orientation === 'vertical') {
      x = Math.random() * (canvas.width - size);
      y = -size;
      velX = 0;
      velY = currentStage.speed + 80 + Math.random() * 60;
    } else {
      x = canvas.width + size;
      y = Math.random() * (canvas.height - size);
      velX = -(currentStage.speed + 80 + Math.random() * 60);
      velY = 0;
    }
    hearts.push(new Entity(null, x, y, velX, velY, size, 'heart'));
  }

  /**
   * Spawn a collectible (either wedding rings or a love letter) at a random
   * position along the appropriate axis for the current stage. Collectibles
   * travel at a slightly slower speed than hearts to make them easier to
   * catch.
   */
  function spawnCollectible() {
    const size = 40 + Math.random() * 25;
    const img = Math.random() < 0.5 ? loadedImages.rings : loadedImages.letter;
    let x, y, velX, velY;
    if (currentStage.orientation === 'vertical') {
      x = Math.random() * (canvas.width - size);
      y = -size;
      velX = 0;
      velY = currentStage.speed + 50;
    } else {
      x = canvas.width + size;
      y = Math.random() * (canvas.height - size);
      velX = -(currentStage.speed + 50);
      velY = 0;
    }
    collectibles.push(new Entity(img, x, y, velX, velY, size));
  }

  /**
   * Advance to the next stage of the journey. Resets per‑stage variables and
   * clears the arrays of hearts and collectibles. If there are no more stages
   * left the game is finished.
   */
  function nextStage() {
    currentStageIndex++;
    if (currentStageIndex >= stages.length) {
      finishGame(true);
    } else {
      currentStage = stages[currentStageIndex];
      stageProgress = 0;
      bgOffsetX = 0;
      bgOffsetY = 0;
      hearts = [];
      collectibles = [];
      heartSpawnTimer = 0;
      collectibleSpawnTimer = 0;
      player.resetPosition(currentStage.orientation);
    }
  }

  /**
   * End the game. Displays the scoreboard with a summary of the player's
   * achievements. If the journey was completed successfully `won` will be
   * true; otherwise the player lost all lives.
   * @param {boolean} won Whether the player successfully completed all stages.
   */
  function finishGame(won) {
    gameRunning = false;
    // Compute a simple score: each collectible is 50 points, each remaining
    // life is 100 points, and each completed stage adds a bonus. Hearts hit
    // subtract a penalty.
    score = ringsCollected * 50 + health * 100 + (currentStageIndex * 200) - heartsHit * 25;
    finalMessageEl.textContent = won ?
      'Congratulations! You completed the journey together!' :
      'You were overwhelmed by falling hearts!';
    finalScoreEl.textContent = 'Score: ' + Math.max(0, Math.floor(score));
    finalRingsEl.textContent = 'Rings/Letters collected: ' + ringsCollected;
    finalHeartsEl.textContent = 'Hearts collided: ' + heartsHit;
    scoreBoard.style.display = 'flex';

    // Notify any external listener that the game has finished. This allows
    // the website to record high scores and close the game overlay when
    // integrated into other flows (e.g. RSVP submissions). The callback
    // receives the final score as its argument.
    if (typeof window.afterEverestGame === 'function') {
      window.afterEverestGame(Math.max(0, Math.floor(score)));
    }
  }

  /**
   * Draw a small HUD overlay showing current stage name, lives, rings
   * collected and a simple progress bar.
   */
  function drawHUD() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, 40);
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px Arial';
    ctx.textBaseline = 'middle';
    ctx.fillText('Stage: ' + currentStage.name, 10, 20);
    ctx.fillText('Lives: ' + health, 260, 20);
    ctx.fillText('Rings: ' + ringsCollected, 380, 20);
    // Draw progress bar
    const barWidth = 200;
    const barHeight = 10;
    const barX = canvas.width - barWidth - 20;
    const barY = 15;
    ctx.fillStyle = '#555';
    ctx.fillRect(barX, barY, barWidth, barHeight);
    const progressRatio = Math.min(1, stageProgress / currentStage.length);
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(barX, barY, barWidth * progressRatio, barHeight);
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(barX, barY, barWidth, barHeight);
  }

  /**
   * The main animation loop. This function updates the game state and
   * renders everything to the canvas. It runs on every frame via
   * requestAnimationFrame.
   * @param {DOMHighResTimeStamp} timestamp The current time provided by the browser.
   */
  function gameLoop(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const dt = (timestamp - lastTimestamp) / 1000; // delta time in seconds
    lastTimestamp = timestamp;
    // Only update the game state if the game is running
    if (gameRunning) {
      // Update stage offsets for scrolling backgrounds
      if (currentStage.orientation === 'vertical') {
        bgOffsetY += currentStage.speed * dt;
        if (bgOffsetY > canvas.height) {
          bgOffsetY -= canvas.height;
        }
      } else {
        bgOffsetX += currentStage.speed * dt;
        if (bgOffsetX > canvas.width) {
          bgOffsetX -= canvas.width;
        }
      }
      // Update progress distance
      stageProgress += currentStage.speed * dt;
      // Update timers for spawning objects
      heartSpawnTimer += dt;
      collectibleSpawnTimer += dt;
      // Spawn hearts at random intervals
      if (heartSpawnTimer > 0.8 + Math.random() * 0.6) {
        spawnHeart();
        heartSpawnTimer = 0;
      }
      // Spawn collectibles less frequently
      if (collectibleSpawnTimer > 2.0 + Math.random() * 1.5) {
        spawnCollectible();
        collectibleSpawnTimer = 0;
      }
      // Update player
      player.update(dt);
      // Update hearts
      for (let i = hearts.length - 1; i >= 0; i--) {
        const heart = hearts[i];
        heart.update(dt);
        if (player.intersects(heart)) {
          heartsHit++;
          health--;
          hearts.splice(i, 1);
          if (health <= 0) {
            finishGame(false);
          }
          continue;
        }
        if (heart.offscreen()) {
          hearts.splice(i, 1);
        }
      }
      // Update collectibles
      for (let i = collectibles.length - 1; i >= 0; i--) {
        const col = collectibles[i];
        col.update(dt);
        if (player.intersects(col)) {
          ringsCollected++;
          collectibles.splice(i, 1);
          continue;
        }
        if (col.offscreen()) {
          collectibles.splice(i, 1);
        }
      }
      // Advance to next stage if progress threshold reached
      if (stageProgress >= currentStage.length) {
        nextStage();
      }
    }
    // Draw everything
    drawScene();
    // Continue the loop
    requestAnimationFrame(gameLoop);
  }

  /**
   * Render the current state of the game. Draws the scrolling background,
   * obstacles, collectibles, player sprite and HUD overlay.
   */
  function drawScene() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw repeating background based on orientation
    if (currentStage.orientation === 'vertical') {
      ctx.drawImage(currentStage.background, 0, -bgOffsetY, canvas.width, canvas.height);
      ctx.drawImage(currentStage.background, 0, -bgOffsetY + canvas.height, canvas.width, canvas.height);
    } else {
      ctx.drawImage(currentStage.background, -bgOffsetX, 0, canvas.width, canvas.height);
      ctx.drawImage(currentStage.background, -bgOffsetX + canvas.width, 0, canvas.width, canvas.height);
    }
    // Draw collectibles and hearts
    collectibles.forEach(col => col.draw());
    hearts.forEach(h => h.draw());
    // Draw player
    player.draw();
    // Draw HUD overlay with stage info
    if (gameRunning) drawHUD();
  }

  /**
   * Public function exported on window to start the game. Loads assets
   * and initialises the game only when called. This prevents the game
   * from starting automatically when the script is loaded.
   */
  function startEverestLoveRun() {
    // Only start if not already running
    if (gameRunning) return;
    // Hide any existing scoreboard elements
    if (scoreBoard) scoreBoard.style.display = 'none';
    loadAssets(assetFiles, initGame);
  }

  // Expose the start function globally
  window.startEverestLoveRun = startEverestLoveRun;
})();