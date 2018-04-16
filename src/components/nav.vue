<template>
  <div id="top">
    <div class="swiper-container" id="nav">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span style="color:rgba(255,255,255,1);">热卖</span></div>
        <div class="swiper-slide" v-for="item in nav">
          <span>{{item.text}}</span>
        </div>
        
        <div class="bar">
          <div class="color"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav:[{
        id:0,
        text:'轻芒'
      },{
        id:1,
        text:'家居'
      },{
        id:2,
        text:'科技'
      },{
        id:3,
        text:'吃喝'
      },{
        id:4,
        text:'礼物'
      },{
        id:5,
        text:'心灵'
      },{
        id:6,
        text:'艺术'
      },{
        id:7,
        text:'时尚'
      },{
        id:8,
        text:'旅行'
      },{
        id:9,
        text:'摄影'
      }]
    }
  },
  methods: {
    choose:function(id){
      console.log(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top {
  height:1.30667rem;
  position:fixed;
  bottom:0;
  z-index:5;
  width:100%;
  background:#000;
  padding-left:50px;
}
#top .addr {
  height:36px;
  margin:0 auto;
  display:block;
}
#top .search {
  position:absolute;
  top:0;
  right:0;
  height:36px;
  display:block;
}
#nav .swiper-slide span {
  margin:0 5px;
  text-align:center;
  display:block;
  line-height:1.30667rem;
  font-size:14px;
  color:rgba(153,153,153,1);
}
[data-dpr="2"] #nav .swiper-slide span {
    font-size: 28px;
}
[data-dpr="3"] #nav .swiper-slide span {
    font-size: 42px;
}
#nav .bar {
  width:50px;
  height:3px;
  position:absolute;
  bottom:0px;
}
#nav .bar .color {
  width:36px;
  margin:0 auto;
  height:3px;
  background:#ff4891;
}
</style>
