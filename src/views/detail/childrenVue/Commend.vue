<template>
  <div class="commend">
    <Goods :goods="recommends" whichgoods="detail"/>
  </div>
</template>

<script>
  import Goods from "../../../components/content/goods/Goods";
  export default {
    name: "Commend",
    props: ['recommends'],
    components: {
      Goods
    }
  }
</script>

<style scoped>

</style>
