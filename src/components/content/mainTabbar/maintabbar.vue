<template>
    <Tabbar>
        <TabbarItem path="/home">
            <img src="../../../assets/img/tabbar/home.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/home_active.png" alt="" slot="icon-active">
            <div slot="text">首页</div>
        </TabbarItem>
        <TabbarItem path="/classifi">
            <img src="../../../assets/img/tabbar/classifi.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/classifi_active.png" alt="" slot="icon-active">
            <div slot="text">分类</div>
        </TabbarItem>
        <TabbarItem path="/shopcart">
            <img src="../../../assets/img/tabbar/shopcart.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/shopcart_active.png" alt="" slot="icon-active">
            <div slot="text">购物车</div>
        </TabbarItem>
        <TabbarItem path="/personal">
            <img src="../../../assets/img/tabbar/personal.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/personal_active.png" alt="" slot="icon-active">
            <div slot="text">我的</div>
        </TabbarItem>
    </Tabbar>
</template>

<script>
    import Tabbar from "../../common/tabbar/Tabbar"
    import TabbarItem from "../../common/tabbar/TabbarItem";
    export default {
        name: "maintabbar",
        components:{
            Tabbar,
            TabbarItem
        }
    }
</script>

<style scoped>

</style>
