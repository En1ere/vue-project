<template>
    <main class="games">
        <h1 class="games__title">
            Games
        </h1>
        <games-list />
    </main>
</template>

<script>
import GamesList from "~/components/games/GamesList.vue";

export default {
    name: "Games",
    components: {GamesList},
}
</script>

<style scoped lang="scss">
</style>