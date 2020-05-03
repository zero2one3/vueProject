<template>
  <ContinuPlay :banners="banners">
    <div v-for="(item, index) in banners" class="slide" :key="index" slot="slide">
      <img :src="item" alt="" >
    </div>
  </ContinuPlay>
</template>

<script>
  import ContinuPlay from "../../../components/common/continuplay/ContinuPlay";
  export default {
    name: "ContinuePlayDetail",
    props: ['banners'],
    components: {
      ContinuPlay
    }
  }
</script>

<style scoped>
  .slide{
    overflow: hidden;
    height: 400px;
  }

</style>
