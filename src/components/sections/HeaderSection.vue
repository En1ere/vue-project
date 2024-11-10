<template>
    <header class="header" :class="{'game': isGamePage}">
        <breadcrumbs />
    </header>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs.vue";
export default {
    name: "HeaderSection",
    components: {Breadcrumbs},
    computed: {
        isGamePage() {
            return this.$route.name === "Game"
        }
    }
}
</script>

<style scoped lang="scss">
    .header {
        height: 100px;
        background: $defaultViolet;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $defaultWhiteFont;
    }
</style>