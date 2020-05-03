<template>
  <ContinuPlay :banners="banners">
    <div v-for="(item, index) in banners" class="slide" :key="index" slot="slide">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="playimaload">
      </a>
    </div>
  </ContinuPlay>

</template>

<script>
  import ContinuPlay from "../../../components/common/continuplay/ContinuPlay";
  export default {
    name: "ContinuePlayItem",
    props: ['banners'],
    components: {
      ContinuPlay
    },
    methods: {
      //告知home界面轮播图已经加载好了
      playimaload(){
        if(!this.isimgLoad) {
          this.$bus.$emit('playimaload')
          this.isimgLoad = true
        }
      },
    },

  }
</script>

<style scoped>

</style>
