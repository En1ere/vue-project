<template>
    <nav class="breadcrumbs">
        <RouterLink class="link" v-for="route in filteredRoutes" :key="route.path" :to="route.path">
            {{ route.name }}
        </RouterLink>
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
            return routes.filter(route => route.path !== this.currentPath);
        }
    },
}
</script>

<style scoped lang="scss">
    .breadcrumbs {
        display: flex;
    }
    .link {
        color: $defaultWhiteFont;
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
</style>