<template>
	<Header />
	<main >
        <router-view/>
    </main>
    <Footer />
</template>

<script setup>
import Header from "./layouts/header/Header.vue"
import Footer from "./layouts/footer/Footer.vue"

</script>

<style scoped>

</style>
