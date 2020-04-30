<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <maintabbar/>
  </div>
</template>

<script>
  import maintabbar from "./components/content/mainTabbar/maintabbar";
  export default {
    name: 'App',
    components:{
      maintabbar,
    }
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
