<template>
  <div class="home_box">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {GetHomeDate} from "../../network/home";

  export default {
    name: "Home",
    components:{
      NavBar
    },
    data(){
      return {
        banners: '',
        recommends: '',

      }
    },
    created() {
      GetHomeDate().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }

  }
</script>

<style scoped>
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
</style>
