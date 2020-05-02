<template>

  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: ['probeType'],
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad:true
      })
      //监听滚动时的坐标变化
      this.scroll.on('scroll', positon => {
        this.$emit('scroll', positon)
      })
      //监听上拉加载
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style scoped>

</style>
