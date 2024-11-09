<template>
    <main class="game">
        <h1 class="game__title">
            {{ currentGame || "Loading game..." }}
        </h1>
        <section class="game-content">

        </section>
    </main>
</template>

<script>
import SnakeGame from "../service/games/snake/game.js";
import {GAMES} from "~/service/games/types";
export default {
    name: "Game",
    data() {
        return {
            currentGame: "null",
        }
    },
    methods: {
        init() {
            this.checkCurrentGame();

            if(this.currentGame === GAMES.SNAKE) {
                this.initSnake();
            }
            else if(this.currentGame === GAMES.HANGMAN) {

            }
            else {
                console.log(`Can't find a game ${this.currentGame}`);
                return;
            }
        },
        checkCurrentGame() {
            const routeName = this.$route.path.split("/")[2];
            if (routeName) {
                this.currentGame = routeName;
            }
            else {
                this.currentGame = null;
                console.log("Cannot detect game via route...")
            }
        },
        initSnake() {
            const Snake = new SnakeGame();
            Snake.initGame();
        }
    },
    mounted() {
        this.init();
    },
}
</script>

<style scoped lang="scss">
    .game {
        background: $defaultGradient;
        height: unset;
        padding: 0 16px 64px;
    }
    .game-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px;
    }
</style>