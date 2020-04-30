<template>
    <div class="tabbar_item" @click="TabbarClick(path)">
        <div v-show="!isActive"><slot name="icon" class="img"></slot></div>
        <div v-show="isActive"><slot name="icon-active" class="img"></slot></div>
        <slot name="text" class="text"></slot>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props:['path'],
        computed:{
            isActive(){
                return this.path === this.$route.path
            }
        },
        methods:{
            TabbarClick(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style>
    .tabbar_item{
        flex: 1;
        height: 49px;
        cursor: pointer;
    }
    .tabbar_item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        margin-bottom: -2px;
    }
    .tabbar_item div{
        font-size: 12px;
    }
</style>