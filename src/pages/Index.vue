<template>
    <main class="home-page">
        <h1 class="home-page__greetings">
            Hi! I am Alexander and I am a web developer.
        </h1>
        <article>
            <span class="home-page__text">
                Welcome to my personal page with my small pet projects.
            </span>
            <span class="home-page__text">
                You can read about me, check my code, play some games or you can read really... REALLY bad and Sick jokes.
            </span>
            <span class="home-page__text">
                Have fun!
            </span>
        </article>
    </main>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style scoped lang="scss">
    .home-page {
        padding: 20px 16px;

        &__greetings {
            font-size: 36px;
            margin-bottom: 36px;
        }
        &__text {
            display: flex;
            font-size: 24px;

            &:not(:last-child) {
                margin-bottom: 24px;
            }
            &:last-child {
                font-size: 32px;
            }
        }
    }
</style>