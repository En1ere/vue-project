<template>
    <div class="games-list">
        <default-button v-for="game in gamesList" :key="game.id" :no-padding="true">
            <RouterLink class="games-list__item" :to="game.path">
                {{ game.name }}
            </RouterLink>
        </default-button>
    </div>
</template>

<script>
import {gamesList} from "~/service/games"
import DefaultButton from "~/components/common/DefaultButton.vue";
export default {
    name: "GamesList",
    components: {DefaultButton},
    data() {
        return {
            gamesList: [],
        }
    },
    created() {
        this.gamesList = gamesList;
    },
}
</script>

<style scoped lang="scss">
    .games-list {
        display: flex;
        gap: 20px;

        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            padding: 0 20px;
        }
    }
</style>