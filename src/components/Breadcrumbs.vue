<template>
    <nav class="breadcrumbs">
        <template v-for="route in filteredRoutes" :key="route.path">
            <span v-if="isCurrentRoute(route)" class="link active">
                {{ route.name }}
            </span>
            <RouterLink v-else :to="route.path" class="link">
                {{ route.name }}
            </RouterLink>
        </template>
    </nav>
</template>

<script>
import { routes } from "~/service/router/index.ts";
export default {
    name: "Breadcrumbs",
    computed: {
        currentPath() {
            return this.$router.currentRoute.value.path;
        },
        filteredRoutes() {
            return routes.filter(route => route.name !== "Game");
        }
    },
    methods: {
        isCurrentRoute(route) {
            return route.path === this.currentPath;
        }
    }
}
</script>

<style scoped lang="scss">
    .breadcrumbs {
        display: flex;
    }
    .link {
        color: $defaultWhiteFont;
        font-size: 24px;

        &:not(:last-child) {
            margin-right: 20px;
        }

        &.active {
            border-bottom: 4px solid $defaultWhiteFont;
        }
    }
</style>