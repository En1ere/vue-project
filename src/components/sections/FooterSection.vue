<template>
    <footer class="footer" :class="{'game': isGamePage}">
        <div class="footer__copyright">
            © 2024 Roy Alexander
        </div>
        <div class="footer__socials">
            <div class="social" v-for="social in getSocials" :key="social.name">
                <img :src=getIconPath(social) :alt="social.name">
                <a :href="social.link" target="_blank">
                    {{ social.name }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import {socialsList} from "~/service/socials";
export default {
    name: "FooterSection",
    computed: {
        isGamePage() {
            return this.$route.name === "Game"
        },
        getSocials() {
            return socialsList;
        }
    },
    methods: {
        getIconPath(social) {
            return `../../src/assets/img/icons/${social.icon}`;
        }
    }
}
</script>

<style scoped lang="scss">
.footer {
    height: 100px;
    background: $defaultViolet;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: $defaultWhiteFont;
    padding: 20px;

    &__socials {
        display: flex;
        flex-direction: row;
        height: 100%;
        gap: 26px;
    }
    &__copyright {
        display: flex;
    }
}
.social {
    display: flex;
    align-items: center;

    & a {
        font-size: 20px;
        color: $defaultWhiteFont;
        margin: 0 0 0 8px;
    }

    & img {
        width: 30px;
        max-width: 30px;
        min-width: 30px;
    }
}
</style>