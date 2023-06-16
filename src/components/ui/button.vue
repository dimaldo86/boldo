<template>
    <button type="button" class="btn__custom">
       <slot></slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss" >
.btn__custom {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 8px 40px;
    font-weight: 700;
    color:var(--primary);
    transition: var(--transition);
    border:none;

    &:hover {
        background-color: var(--secondary);
    }
}
</style>