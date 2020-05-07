<template>
    <div class="personal_box">
      <NavBar class="nav-bar">
        <div slot="center">个人中心</div>
      </NavBar>
      <Pesonitem/>
      <PersonMoney/>
      <Space/>
      <PublicLists/>
    </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";
  import NavBar from "../../components/common/navbar/NavBar";
  import Space from "./childrenVue/Space";

  import Pesonitem from "./childrenVue/Pesonitem";
  import PersonMoney from "./childrenVue/PersonMoney";
  import PublicLists from "./childrenVue/PublicLists";
  export default {
    name: "Personal",
    components: {
      Scroll,
      NavBar,
      Space,
      Pesonitem,
      PersonMoney,
      PublicLists
    }

  }
</script>

<style scoped>
  .personal_box{
    width: 100%;
    height: 100%;
  }
  .nav-bar{
    width: 100%;
    color: #fff;
    background: var(--color-tint);
  }
</style>
