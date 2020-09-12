<template>
  <ContinuPlay :banners="banners" @anima="anima">
    <div v-for="(item, index) in banners" 
         class="slide" 
         :key="index" 
         slot="slide" 
         :class="[{'isPlay': isPlay}]">
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
    data() {
      return {
        isPlay: true
      }
    },
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
      anima(value) {
        this.isPlay = value
      }
    },

  }
</script>

<style scoped>
  .isPlay{
    transition: all .3s;
  }
</style>
