<template>
    <div class="tab-control">
      <div v-for="(item, index) in controlItems"
           class="tab-items"
           :key="index"
           :class="{active:index===currentItem}"
           @click="GetIndex(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:['controlItems'],
      data(){
        return{
          currentItem: 0,
          Types: ['pop', 'new', 'sell'],
          currentType: 'pop',
        }
      },
      methods:{
        GetIndex(index){
          this.currentItem = index
          this.currentType = this.Types[index]
          this.$emit('tabControlClick', this.currentType)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    /*position: sticky;*/
    /*top: 44px;*/
    background: #fff;
    z-index: 99;
  }
  .tab-items{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: var(--color-high-text);

  }
  .active span{
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
