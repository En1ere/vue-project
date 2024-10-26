<template>
    <div class="content-wrapper">
        <header-section />
        <RouterView />
        <footer-section />
    </div>
</template>

<script>
import HeaderSection from "~/components/sections/HeaderSection.vue";
import FooterSection from "~/components/sections/FooterSection.vue";
export default {
    name: "App",
    components: {FooterSection, HeaderSection},
}
</script>


<style lang="scss">
.content-wrapper {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
