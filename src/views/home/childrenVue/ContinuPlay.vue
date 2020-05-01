<template>
    <div class="ContinuPlay_box" @touchstart="TouchStart" @touchmove="TouchMove" @touchend="TouchEnd">

      <div class="items_box">
        <div v-for="(item, index) in banners" class="slide" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </div>
      </div>

      <div class="points_box">
        <div class="points">
          <div class="each_point" v-for="(item, index) in banners.length" :key="index" :class="{current:index==CurrentImg}"></div>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "ContinuPlay",
    props:['banners'],
    data(){
      return{
        bannerwidth: 0,        //轮播图宽度
        StartPoint: 0,         //触摸开始的点的横坐标
        EndPoint: 0,           //触摸结束的点的横坐标
        MoveLength: 0,         //StartPoint与EndPoint的差值
        CurrentImg: 0,         //当前轮播图的索引
        isPlaying: true,       //判断是否处于自动轮播
        playTimer: null        //轮播定时器
      }
    },
    methods:{
      TouchStart(event){
        //告知轮播图停止
        this.isPlaying = false
        //获取触摸的开始点
        this.StartPoint = event.changedTouches[0].pageX
      },
      TouchMove(event){
        //获取触摸的结束点
        this.EndPoint = event.changedTouches[0].pageX
        this.slidings()
      },
      TouchEnd(){
        this.Jump()
        //告知轮播图开始轮播
        this.isPlaying = true
      },
      Jump(){
        const currentimg = document.getElementsByClassName('slide')
        //滑动超过轮播图宽度的百分之40，则跳转下一张，否则不跳转
        if(this.MoveLength > 0 && this.CurrentImg !== this.banners.length-1){
          if(this.MoveLength > this.bannerwidth * 0.4){
            this.CurrentImg ++
            currentimg[0].style.marginLeft = -this.CurrentImg * this.bannerwidth + 'px'
          }
          else{
            currentimg[0].style.marginLeft = -this.CurrentImg * this.bannerwidth + 'px'
          }
        }
        else if(this.MoveLength < 0 && this.CurrentImg !== 0){
          if(-this.MoveLength > this.bannerwidth * 0.4){
            this.CurrentImg --
            currentimg[0].style.marginLeft = -this.CurrentImg * this.bannerwidth + 'px'
          }
          else{
            currentimg[0].style.marginLeft = -this.CurrentImg * this.bannerwidth + 'px'
          }

        }


      },
      slidings(){
        //判断是点击还是滑动
        if(this.StartPoint === this.EndPoint){return}
        this.MoveLength = this.StartPoint - this.EndPoint
        const currentimg = document.getElementsByClassName('slide')
        //获取轮播图的宽度
        this.bannerwidth = currentimg[0].offsetWidth
        //判断是否超出滑动范围
        if(this.MoveLength > 0 && this.CurrentImg !== this.banners.length-1){
          currentimg[0].style.marginLeft = -this.MoveLength - this.CurrentImg * this.bannerwidth   + 'px'
        }
        else if(this.MoveLength < 0 && this.CurrentImg !== 0){
          currentimg[0].style.marginLeft = -this.MoveLength - this.CurrentImg * this.bannerwidth   + 'px'
        }
      }
    },
    mounted() {

      // if(this.isPlaying === true){
      //   this.playTimer = setInterval(() => this.Jump(),3000)
      // }
      // else{
      //   clearInterval(this.playTimer)
      // }

    },
  }
</script>

<style scoped>
  .ContinuPlay_box{
    overflow: hidden;
    position: relative;
  }
  .ContinuPlay_box .items_box{
    display: flex;
  }
  .ContinuPlay_box .slide{
    flex-shrink: 0;
    width: 100%;

  }
  .ContinuPlay_box .slide img, .ContinuPlay_box .slide a{
    width: 100%;
    height: 100%;
  }


  .points_box{
    display: flex;
    justify-content: center;
  }

  .points{
    display: flex;
    width: 33%;
    height: 10px;
    position: absolute;
    bottom: 8px;
    justify-content: space-evenly;
  }
  .points .each_point{
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #fff;
    opacity: 0.7;
  }
  .points .current{
    background: #ff0031;
  }
</style>
