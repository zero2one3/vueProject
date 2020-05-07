<template>
    <div class="personitem">

      <div class="head">
        <img src="../../../assets/img/personal/head.png" alt="">
      </div>

      <div class="content">
        <div class="login"><span>登陆/注册</span></div>

        <div class="bind">
          <img src="../../../assets/img/personal/phone.png" alt="">
          <div class="txt"><span>暂无绑定手机号</span></div>
        </div>
      </div>

      <div class="goto">
        <img src="../../../assets/img/personal/goto.png" alt="">
      </div>

    </div>
</template>

<script>
  export default {
    name: "Pesonitem"
  }
</script>

<style scoped>
  .personitem{
    width: 100%;
    height: 16%;
    background: var(--color-tint);
    display: flex;
  }
  .head{
    flex: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .head img{
    width: 70%;
  }
  .content{
    flex: 5;
    color: #fff;

  }
  .content .login{
    width: 100%;
    height: 45%;
    font-size: 20px;
    display: flex;
    align-items: flex-end;
  }
  .content .login span{
    margin-left: 10px;
  }
  .content .bind{
    width: 100%;
    height: 45%;
    position: relative;
  }
  .content .bind img{
    width: 8%;
    position: relative;
    top:50%;
    transform: translate(0, -50%);
    float: left;
  }
  .content .bind .txt{
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
  }
  .content .bind .txt span{
    font-size: 15px;

  }
  .goto{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goto img{
    width: 70%;
  }
</style>
