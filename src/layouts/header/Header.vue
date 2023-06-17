<template>
    <header class="header">
        <nav class="header__nav navbar navbar-expand-lg">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <img src="../../img/logo/Logo.svg" alt="LOGO">
                </router-link>
                <button
                    class="burger navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    v-bind:class="{ open: burgerOpen }"
                    @click="handleToggleMenu"
                >
                    <!-- <span class="navbar-toggler-icon"></span> -->
                    <div class="line line-1"></div>
                    <div class="line line-2"></div>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto  mb-lg-0">
                        <li class="nav-item" v-for="link in menuLinks" :key="link.id">
                            <router-link class="nav-link" aria-current="page" :to="link.path">{{ link.title }}</router-link>
                        </li>
                    </ul>
                    <Button >Log In</Button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/button.vue'

const menuLinks = [
    {
        id:1,
        title:'Product',
        path:'/product'
    },
    {
        id:2,
        title:'Services',
        path:'/services'
    },
    {
        id:3,
        title:'About',
        path:'/about'
    }
]

const burgerOpen = ref(false)
const handleToggleMenu = () => {
    burgerOpen.value = !burgerOpen.value
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    width: 100%;
    background-color: transparent;
    padding-top: 48px;
    z-index: 1000;

    .navbar-brand {
    transition: var(--transition);

        &:hover {
            opacity: 0.7;
        }
    }

    &__nav {
        background-color: transparent
    }

    .burger {
        border: none;
        background: var(--secondary);
        width: 42px;
        height: 37px;
        cursor: pointer;
        z-index: 100;
        .line {
            width: 100%;
            height: 2px;
            background: #fff;
            margin: 9px 0;
            transition: var(--transition);
        }
        &.open {
            .line-1 {
                transform: translateY(7px) rotate(45deg);
            }
            .line-2 {
                transform: translateY(-4px) rotate(-45deg);
            }
        }
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
.navbar-toggler {
    padding: 4px 7px;
    font-size: var(--bs-navbar-toggler-font-size);
    line-height: 1;
    color: var(--secondary);
    background-color: transparent;
    border: 2px solid var(--secondary);
    border-radius: var(--bs-navbar-toggler-border-radius);
    transition: var(--bs-navbar-toggler-transition);

    &:focus {
        box-shadow: 0 0 0 3px;
    }
}
@media (min-width: 768px) {
    .navbar-expand-lg .navbar-toggler {
        display: none;
    }

    .navbar-expand-lg .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }

    .navbar-expand-lg .navbar-nav {
        flex-direction: row;
    }
}
@media (max-width: 768px) {
    .header {
        padding-top: 30px;
    }
    .navbar-collapse {
        padding-top: 30px;
    }

    .header .navbar-nav {
        margin-right: 0;
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding: 15px 20px;
    }
}

@media (max-width: 576px){
    .header {
        padding-top: 15px;
    }
}
</style>