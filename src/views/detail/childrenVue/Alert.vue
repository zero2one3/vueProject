<template>
    <div class="alert" v-show="isShow">
      <div class="txt"><span>成功加入购物车!</span></div>
    </div>
</template>

<script>
  export default {
    name: "Alert",
    props: ['isShow']
  }
</script>

<style scoped>
  .alert{
    width: 40%;
    height: 10%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .alert .txt{
    width: 100%;
    height: 100%;
    background: rgba(0 ,0 , 0, .7);
    text-align: center;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
  }
  .alert .txt span{
    padding: 8px 10px;
    color: #fff;
  }
</style>
