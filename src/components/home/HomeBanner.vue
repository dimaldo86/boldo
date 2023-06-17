<template>
   <section class="banner">
    <div class="banner__block"></div>
        <!-- <h1 class="banner__title">Save time by building  fast with Boldo Template </h1> -->
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.banner {
        background: var(--light-blue);
        height: 800px;
        position: relative;
    }

@media (min-width: 768px) {
    .banner {
        background: var(--primary);
        height: 800px;
        position: relative;

       &__block {
            position: absolute;
            right: 0;
            background-color: var(--light-blue);
            width: 68%;
            height: 509px;
            z-index: 2;
            clip-path: circle(100% at 106% -6%);
       }
    }
}

@media (min-width: 831px) {
    .banner {

       &__block {
            width: 58%;
            height: 539px;
            z-index: 2;
            clip-path: circle(100% at 109% -2%);
       }
    }
}


@media (min-width: 992px) {
    .banner {

       &__block {
            width: 680px;
            height: 650px;
            z-index: 2;
            clip-path: circle(100% at 99% -12%);
       }
    }
}


</style>