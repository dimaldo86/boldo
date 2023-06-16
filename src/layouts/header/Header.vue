<template>
    <div class="header">
        <nav class="header__nav navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../../img/logo/Logo.svg" alt="LOGO">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <Button >Log In</Button>
                </div>
            </div>
        </nav>
    </div>

</template>

<script setup>
import Button from '@/components/ui/button.vue';

</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    width: 100%;
    background-color: transparent;
    padding-top: 48px;
    z-index: 1000;

    &__nav {
        background-color: transparent
    }
    .navbar-nav {
        margin-right: 20px;
    }
}
.navbar-expand-lg .navbar-nav .nav-link {
    color: #fff;
    font-weight: 600;
    padding: 8px 20px;
    transition: var(--transition);

    &:hover {
        color: var(--secondary);
    }
}
</style>