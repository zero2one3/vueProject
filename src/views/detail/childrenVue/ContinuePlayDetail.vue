<template>
  <ContinuPlay :banners="banners" @anima="anima">
    <div v-for="(item, index) in banners"
         class="slide" 
         :key="index" 
         slot="slide" 
         :class="[{'isPlay': isPlay}]">
      <img :src="item" alt="" >
    </div>
  </ContinuPlay>
</template>

<script>
  import ContinuPlay from "../../../components/common/continuplay/ContinuPlay";
  export default {
    name: "ContinuePlayDetail",
    props: ['banners'],
    data() {
      return {
        isPlay: true
      }
    },
    components: {
      ContinuPlay
    },
    methods: {
      anima(value) {
        this.isPlay = value
      }
    }
  }
</script>

<style scoped>
  .slide{
    overflow: hidden;
    height: 400px;
  }
  .isPlay{
    transition: all .3s;
  }
</style>
