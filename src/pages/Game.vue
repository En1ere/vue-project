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
export default {
    name: "Game",
    data() {
        return {
            currentGame: "null",
        }
    },
    methods: {
        checkCurrentGame() {
            const routeName = this.$route.path.split("/")[2];
            if (routeName) {
                this.currentGame = routeName;
            }
            else {
                this.currentGame = null;
                console.log("Cannot detect game via route...")
            }
        }
    },
    mounted() {
        this.checkCurrentGame();
    },
}
</script>

<style scoped lang="scss">
    .game {
        background: $defaultGradient;
    }
    .game-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>