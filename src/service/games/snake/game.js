export default class SnakeGame {
    constructor() {
        this.config = {
            gameMapSize: {
                x: 400,
                y: 640
            },
            step: 0,
            maxStep: 6,
            cellSize: 20,
            berrySize: 20 / 5,
        };
        this.scoreBlock = null;
        this.score = 0;
        this.berryCoords = {
            x: 0,
            y: 0,
        }
        this.snake = {
            x: 200,
            y: 320,
            speedX: this.config.cellSize,
            speedY: 0,
            bodyLength: 3,
            segments: [],
        }
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
    }
    renderLayout() {
        this.renderElement(".game-content", "div", {}, ["snake-wrapper"])
    }
    renderScore() {
        this.renderElement(".snake-wrapper", "div", {}, ["snake-score"]);
        const tt= document.querySelector(".snake-score");
        tt.insertAdjacentText("beforeend", "1234");
    }
    renderCanvas() {
        this.renderElement(".snake-wrapper", "div", {}, ["snake-canvas-wrapper"]);
        this.renderElement(
            ".snake-canvas-wrapper",
            "canvas",
            {
                "id": "snake-canvas",
                "width": this.config.gameMapSize.x,
                "height": this.config.gameMapSize.y
            })
    }
    initRender() {
        this.renderLayout();
        this.renderScore();
        this.renderCanvas();
    }
}
