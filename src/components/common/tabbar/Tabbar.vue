<template>
    <div class="tabbar_box">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",

    }
</script>

<style scoped>
    .tabbar_box{
        display: flex;
        text-align: center;
        background: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 3px rgba(100,100,100,.19);
    }

</style>