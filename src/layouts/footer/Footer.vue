<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrap">
                <div class="footer__left">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../img/logo/Logo.svg" alt="LOGO">
                    </router-link>
                    <p class="footer__left-text">
                        Social media validation business
                        model canvas graphical user interface
                        launch party creative facebook iPad twitter.
                    </p>
                    <div class="footer__left-rights">All rights reserved.</div>
                </div>
                <div class="footer__right">
                    <FooterColumns title="Landings" :menuLists=" menuListsLandings" />
                    <FooterColumns title="Company" :menuLists=" menuListsCompany" tip />
                    <FooterColumns title="Resources" :menuLists=" menuListsResources" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import FooterColumns from "./FooterColumns.vue"

const menuListsLandings = [
    {
        id:1,
        name:'home',
        path:'/'
    },
    {
        id:2,
        name:'products',
        path:'/products'
    },
    {
        id:3,
        name:'services',
        path:'/services'
    }
]
const menuListsCompany = [
    {
        id:1,
        name:'home',
        path:'/'
    },
    {
        id:2,
        name:'careers',
        path:'/careers'
    },
    {
        id:3,
        name:'services',
        path:'/services'
    }
]
const menuListsResources = [
    {
        id:1,
        name:'blog',
        path:'/blog'
    },
    {
        id:2,
        name:'products',
        path:'/products'
    },
    {
        id:3,
        name:'services',
        path:'/services'
    }
]

</script>

<style lang="scss" scoped>
.footer {
     margin-top: auto;
     background-color: var(--primary);
     padding: 100px 0;

     &__wrap {
        display: flex;
        width: 100%;
        gap: 50px;
     }

     &__left {
        display: flex;
        flex-direction: column;
        color: #fff;
        width: 30%;

        &-text {
            color: #fff;
            margin-top: 40px;
            margin-bottom: 0;

        }

        &-rights {
            margin-top: 40px;
        }
     }

     &__right {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        padding: 0 60px;
        width: 70%;
     }
}
@media (max-width: 992px) {
    .footer {
        &__wrap {
            gap: 30px;
        }

        &__right {
            padding: 0 30px;
            gap: 20px;
        }
    }
}
@media (max-width: 768px) {
    .footer {
        padding: 60px 0;

        &__wrap {
           flex-direction: column;
        }

        &__left {
            width: 100%;

            &-text {
                width: 65%;
            }
        }

        &__right {
            width: 100%;
            padding: 0;
        }
    }
}
@media (max-width: 576px) {
    .footer {
        padding: 30px 0;

        &__wrap {
            gap: 20px;
        }

        &__left {
            font-size: 12px;

            &-text {
                width: 100%;
                margin-top: 20px;
            }

            &-rights {
                margin-top: 20px;
            }
        }
    }
}
@media (max-width: 475px) {
    .footer {
        &__right {
            flex-direction: column;
        }
    }
}
</style>