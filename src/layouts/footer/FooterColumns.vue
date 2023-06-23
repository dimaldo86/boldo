<template>
    <div class="column">
        <h3 class="column__title">{{ title }}</h3>
        <ul class="column__menu">
            <li class="column__item" v-for="item in menuLists" :key="item.id">
                <router-link class="column__link" :to="item.path">{{ item.name }}</router-link>
                <div v-if="tip" class="column__tip">Hiring!</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    title:{
        type:String,
        required:true
    },
    menuLists: {
        type:Array,
        required:true
    },
    tip:{
        type:Boolean,
        default:false
    }
})

</script>

<style lang="scss" scoped>
.column {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__title {
        font-family: var(--manrope);
        font-size: 20px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 0;
    }

    &__menu {
        width: 100%;
        margin-top: 32px;
        margin-bottom: 0;
        padding: 0;
        list-style-type: none;
    }

    &__item {
        padding: 15px 0;
        display: flex;
        align-items: center;
    }
    &__link {
        width: 100%;
        color:var(--gray);
        font-size: 20px;
        text-decoration: none;
        text-transform: capitalize;
        transition: var(--transition);

        &:hover {
            color: var(--secondary);
        }
    }

    &__tip {
        display:none;
        align-items: center;
        justify-content: center;
        width: 72px;
        height: 30px;
        background-color: var(--secondary);
        color:var(--primary);
        font-size: 13px;
        font-weight: 700;
        padding: 1px 14px;
        border-radius: 120px;
        margin-left: 15px;
    }

    &__item:nth-of-type(2) > .column__tip {
        display: flex;
    }
}

@media (max-width: 576px) {
    .column {
        &__title {
            font-size: 16px;
        }

        &__menu {
            margin-top: 20px;
        }

        &__item {
            padding: 10px 0;
        }

        &__link {
            font-size: 14px;
        }
    }
}
</style>