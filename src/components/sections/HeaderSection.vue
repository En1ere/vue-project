<template>
    <header class="header">
        <div>
            Some header
        </div>
        <breadcrumbs />
    </header>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs.vue";
export default {
    name: "HeaderSection",
    components: {Breadcrumbs},
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