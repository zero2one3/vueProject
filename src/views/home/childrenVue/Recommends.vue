<template>
    <div class="recommends">
      <div class="recommends-item" v-for="(item, index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Recommends",
    props:['recommends']
  }
</script>

<style scoped>
  .recommends{
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    border-bottom: 10px solid #eee;
  }
  .recommends-item{
    text-align: center;
  }
  .recommends-item img{
    width: 80%;
    height: 80%;
    padding-bottom: 10px;

  }

</style>
