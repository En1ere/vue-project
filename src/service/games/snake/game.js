export default class SnakeGame {
    constructor() {
        this.config = {
            step: 0,
            maxStep: 6,
            gameMapSettings: {
                mapSize: {
                    x: 400,
                    y: 640
                },
                cellSize: 20,
            },
            appleSettings: {
                size: 20 / 5,
                defaultCoords: {
                    x: 0,
                    y: 0
                }
            },
            snakeSettings: {
                initialCoords: {
                    x: 200,
                    y: 320
                },
                defaultBodyLength: 3,
                defaultSpeed: {
                    x: 20,
                    y: 0
                },
                defaultSegments: []
            }
        };
        this.scoreBlock = null;
        this.score = 0;
        this.scoreStep = 10;
        this.apple = {};
        this.snake = {};
        this.canvas = null;
        this.context = null;
        this.reqId = null;
    }

    // snake ______________________________________________________________________________

    resetApple() {
        this.apple = {
            x: this.config.appleSettings.defaultCoords.x,
            y: this.config.appleSettings.defaultCoords.y,
        }
    }
    resetSnake() {
        this.snake = {
            x: this.config.snakeSettings.initialCoords.x,
            y: this.config.snakeSettings.initialCoords.y,
            speedX: this.config.snakeSettings.defaultSpeed.x,
            speedY: this.config.snakeSettings.defaultSpeed.y,
            bodyLength: this.config.snakeSettings.defaultBodyLength,
            segments: this.config.snakeSettings.defaultSegments,
        }
    }
    checkBorderCollision() {
        if(this.snake.x >= this.config.gameMapSettings.mapSize.x) {
            this.snake.x = 0
        }
        else if(this.snake.x < 0) {
            this.snake.x = this.config.gameMapSettings.mapSize.x
        }
        else if(this.snake.y >= this.config.gameMapSettings.mapSize.y) {
            this.snake.y = 0
        }
        else if(this.snake.y < 0) {
            this.snake.y = this.config.gameMapSettings.mapSize.y
        }
    }

    // apple ______________________________________________________________________________

    setAppleCoords() {
        this.apple.x = this.getRandomInt(this.config.gameMapSettings.mapSize.x)
        this.apple.y = this.getRandomInt(this.config.gameMapSettings.mapSize.y)
    }

    // Score _____________________________________________________________________________

    increaseScore(value) {
        this.score += Number(value) || Number(this.scoreStep);
    }
    updateScore() {
        this.scoreBlock.innerHTML = this.score;
    }

    // functionality _____________________________________________________________________________

    getRandomInt(max) {
        const divider = this.config.gameMapSettings.cellSize;
        const random = Math.random() * max;
        return random - (random % divider);
    }
    initControls() {
        window.addEventListener("keydown", ev => {
            if(ev.key === "ArrowDown") {
                ev.preventDefault();
                if(this.snake.speedY === 0) {
                    this.snake.speedX = 0;
                    this.snake.speedY = this.config.gameMapSettings.cellSize;
                }
            }
            else if(ev.key === "ArrowUp") {
                ev.preventDefault();
                if(this.snake.speedY === 0) {
                    this.snake.speedX = 0;
                    this.snake.speedY = -this.config.gameMapSettings.cellSize;
                }
            }
            else if(ev.key === "ArrowRight") {
                ev.preventDefault();
                if(this.snake.speedX === 0) {
                    this.snake.speedX = this.config.gameMapSettings.cellSize;
                    this.snake.speedY = 0;
                }
            }
            else if(ev.key === "ArrowLeft") {
                ev.preventDefault();
                if(this.snake.speedX === 0) {
                    this.snake.speedX = -this.config.gameMapSettings.cellSize;
                    this.snake.speedY = 0;
                }
            }
        })
    }
    startListeners() {
        const startButton = document.querySelector(".start-game-button");
        const endGameButton = document.querySelector(".end-game-button");
        startButton.addEventListener("click", this.startGame.bind(this));
        endGameButton.addEventListener("click", this.resetGame.bind(this));
    }
    showEndGameModal() {
        document.querySelector("main").classList.add("blurred");
        document.querySelector("body").classList.add("overflow");
        document.querySelector(".end-game-modal-wrapper").classList.add("visible");
        document.querySelector(".end-game-modal-text").innerHTML = `Game over!<br>Your score: ${this.score}`;
        document.querySelector(".end-game-button").innerHTML = "Close";
    }
    removeClasses() {
        document.querySelector("main").classList.remove("blurred");
        document.querySelector("body").classList.remove("overflow");
        document.querySelector(".end-game-modal-wrapper").classList.remove("visible");
    }
    resetGame() {
        this.removeClasses();
        this.context.clearRect(0, 0, this.config.gameMapSettings.mapSize.x, this.config.gameMapSettings.mapSize.y);
        this.score = 0;
        this.scoreStep = 10;
        this.reqId = null;
        this.resetApple();
        this.resetSnake();
        this.updateScore();
    }
    endGame() {
        cancelAnimationFrame(this.tt);
        this.showEndGameModal();
    }

    // render _____________________________________________________________________________

    renderElement(parentElement, element, attributes = {}, classes = []) {
        if(!parentElement || !element) return;

        const parentBlock= document.querySelector(parentElement);
        const renderingElement = document.createElement(element);
        for(const className of classes) {
            renderingElement.classList.add(className);
        }

        Object.keys(attributes).forEach(attribute => {
            renderingElement.setAttribute(attribute, attributes[attribute]);
        })

        parentBlock.insertAdjacentElement("beforeend", renderingElement);
        return renderingElement;
    }
    renderLayout() {
        this.renderElement(".game-content", "div", {}, ["snake-wrapper"]);
        this.renderElement(".snake-wrapper", "div", {}, ["game-info"]);
    }
    renderScore() {
        this.renderElement(".game-info", "div", {}, ["snake-score"]);
        this.scoreBlock = document.querySelector(".snake-score");
        this.scoreBlock.insertAdjacentText("beforeend", this.score);
    }
    renderButtons() {
        const startButton = this.renderElement(".game-info", "button", {}, ["start-game-button"]);
        startButton.innerHTML = "Start Game";
    }
    renderEndGameModal() {
        this.renderElement(".game", "div", {}, ["end-game-modal-wrapper"]);
        this.renderElement(".end-game-modal-wrapper", "div", {}, ["end-game-modal"]);
        this.renderElement(".end-game-modal", "div", {}, ["end-game-modal-text"]);
        this.renderElement(".end-game-modal", "button", {}, ["end-game-button"]);
    }
    renderCanvas() {
        this.renderElement(".snake-wrapper", "div", {}, ["snake-canvas-wrapper"]);
        this.renderElement(
            ".snake-canvas-wrapper",
            "canvas",
            {
                "id": "snake-canvas",
                "width": this.config.gameMapSettings.mapSize.x,
                "height": this.config.gameMapSettings.mapSize.y
            })
    }
    renderSnake() {
        this.snake.x += this.snake.speedX;
        this.snake.y += this.snake.speedY;

        this.checkBorderCollision();

        const segmentCoords = {
            x: this.snake.x,
            y: this.snake.y
        };
        this.snake.segments.unshift(segmentCoords);

        if (this.snake.segments.length > this.snake.bodyLength) {
            this.snake.segments.pop();
        }

        for(const segment of this.snake.segments) {
            if (this.snake.segments.indexOf(segment) === 0) {
                this.context.fillStyle = "#876CA8";
            } else {
                this.context.fillStyle = "#423156";
            }
            this.context.fillRect( segment.x, segment.y, this.config.gameMapSettings.cellSize, this.config.gameMapSettings.cellSize );

            if(this.snake.bodyLength > 3 && this.snake.segments.indexOf(segment) > 0 && segment.x === this.snake.x && segment.y === this.snake.y) {
                this.endGame();
                return;
            }
        }

        if (this.snake.x === this.apple.x && this.snake.y === this.apple.y) {
            this.snake.bodyLength++;
            this.setAppleCoords();
            this.increaseScore();
            this.updateScore();
        }
    }
    renderApple() {
        this.context.beginPath();
        this.context.fillStyle = "#876CA8";
        this.context.arc( this.apple.x + (this.config.gameMapSettings.cellSize / 2 ), this.apple.y + (this.config.gameMapSettings.cellSize / 2 ), this.config.appleSettings.size, 0, 2 * Math.PI );
        this.context.fill();
    }
    initRender() {
        this.renderLayout();
        this.renderScore();
        this.renderButtons();
        this.renderEndGameModal();
        this.renderCanvas();

        this.canvas = document.querySelector("#snake-canvas");
        this.context = this.canvas.getContext("2d");
        this.startListeners();
    }

    // init ______________________________________________________________________________

    gameLoop(ctx) {
        this.tt = requestAnimationFrame( () => this.gameLoop(ctx) );
        if ( ++this.config.step < this.config.maxStep) {
            return;
        }
        this.config.step = 0;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.renderApple();
        this.renderSnake();
    }
    startGame() {
        this.initControls();
        this.setAppleCoords();
        this.reqId = requestAnimationFrame( () => this.gameLoop(this) );
    }
    initGame() {
        this.resetSnake();
        this.resetApple();
        this.initRender();
    }
}
