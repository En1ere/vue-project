<template>
    <div class="games-list">
        <RouterLink class="games-list__item" v-for="game in gamesList" :key="game.id" :to="game.path">
            {{ game.name }}
        </RouterLink>
    </div>
</template>

<script>
import {gamesList} from "~/service/games"
export default {
    name: "GamesList",
    data() {
        return {
            gamesList: [],
        }
    },
    created() {
        this.gamesList = gamesList;
    },
    mounted() {
        console.log(this.$router.getRoutes())
    }
}
</script>

<style scoped lang="scss">
    .games-list {
        display: flex;
        &__item {

        }
    }
</style>