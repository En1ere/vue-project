<template>
    <button class="default-button" :class="{'no-padding': noPadding}" @click="clickHandler">
        <slot class="default-button__slot" />
    </button>
</template>

<script>
export default {
    name: "DefaultButton",
    emits: ["clicked"],
    props: {
        noPadding: {
            default: false,
            type: Boolean
        },
    },
    methods: {
        clickHandler(ev) {
            this.$emit("clicked", ev);
        }
    },
}
</script>

<style scoped lang="scss">
    .default-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: 0;
        background: $defaultViolet;
        color: $defaultWhiteFont;
        height: 40px;
        padding: 0 20px;
        transition: all 0.2s;

        &:hover {
            background: $defaultWhiteFont;
            color: $defaultViolet;
        }

        &.no-padding {
            padding: 0;
        }
    }
</style>