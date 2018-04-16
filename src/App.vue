<template>
  <div id="app">
    <navs></navs>
    <swipers></swipers>
  </div>
</template>

<script>
// import swiper from './utils/swiper.min.js';
import Swiper from 'swiper';
// import './assets/swiper.min.css';
import swipers from './components/swipers';
import navs from './components/nav';

export default {
  name: 'App',
  data(){
    return {
      pagination:''
    }
    
  },
  components:{
    swipers,
    navs
  },
  mounted () {
    //暂时设计每个slide大小需要一致
    var barwidth = 36 //导航粉色条的长度px
    var tSpeed = 300 //切换速度300ms
    var clientWidth,
        navSlideWidth,
        navWidth,
        navSlideWidth,
        bar,
        navSum,
        topBar,
        progress,
        slideProgress,
        activeIndex,
        activeSlidePosition,
        clickIndex

    var navSwiper = new Swiper('#nav', {
      slidesPerView: 6,
      freeMode: true,
      on: {
        init: function() {
          navSlideWidth = this.slides.eq(0).css('width'); //导航字数需要统一,每个导航宽度一致
          bar = this.$el.find('.bar')
          bar.css('width', navSlideWidth)
          console.log(navSlideWidth)
          bar.transition(tSpeed)
          navSum = this.slides[this.slides.length - 1].offsetLeft //最后一个slide的位置

          clientWidth = parseInt(this.$wrapperEl.css('width')) //Nav的可视宽度
          navWidth = 0
          for (let i = 0; i < this.slides.length; i++) {
            navWidth += parseInt(this.slides.eq(i).css('width'))
          }

          topBar = this.$el.parents('body').find('#top') //页头

        },

      },
    });

    var pageSwiper = new Swiper('#page', {
      watchSlidesProgress: true,
      resistanceRatio: 0,
      on: {
        touchMove: function() {
          progress = this.progress
          console.log('progress',progress)
          // var bar;
          bar.transition(0)
          bar.transform('translateX(' + navSum * progress + 'px)')
          //粉色255,72,145灰色51,51,51
          for (let i = 0; i < this.slides.length; i++) {
            slideProgress = this.slides[i].progress
            if (Math.abs(slideProgress) < 1) {
              let r = Math.floor((255 - 153) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 153)
              let g = Math.floor((255 - 153) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 153)
              let b = Math.floor((255 - 153) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 153)
              navSwiper.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
            }
          }
        },
        transitionStart: function() {
          var activeIndex = this.activeIndex
          activeSlidePosition = navSwiper.slides[activeIndex].offsetLeft
          //释放时导航粉色条移动过渡
          bar.transition(tSpeed)
          bar.transform('translateX(' + activeSlidePosition + 'px)')
          //释放时文字变色过渡
          navSwiper.slides.eq(activeIndex).find('span').transition(tSpeed)
          navSwiper.slides.eq(activeIndex).find('span').css('color', 'rgba(255,255,255,1)')
          if (activeIndex > 0) {
            navSwiper.slides.eq(activeIndex - 1).find('span').transition(tSpeed)
            navSwiper.slides.eq(activeIndex - 1).find('span').css('color', 'rgba(153,153,153,1)')
          }
          if (activeIndex < this.slides.length) {
            navSwiper.slides.eq(activeIndex + 1).find('span').transition(tSpeed)
            navSwiper.slides.eq(activeIndex + 1).find('span').css('color', 'rgba(153,153,153,1)')
          }
          //导航居中
          var navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft //activeSlide距左边的距离

          navSwiper.setTransition(tSpeed)
          if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
            navSwiper.setTranslate(0)
          } else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
            navSwiper.setTranslate(clientWidth - navWidth)
          } else {
            navSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)
          }

        },
      }
    });

    navSwiper.$el.on('touchstart', function(e) {
      e.preventDefault() //去掉按压阴影
    })
     navSwiper.on('tap', function(e) {

      var clickIndex = this.clickedIndex
      var clickSlide = this.slides.eq(clickIndex)
      pageSwiper.slideTo(clickIndex, 0);
      this.slides.find('span').css('color', 'rgba(153,153,153,1)');
      clickSlide.find('span').css('color', 'rgba(255,255,255,1)');
    })

    //内容滚动      
    var scrollSwiper = new Swiper('.scroll', {
      direction: 'vertical',
      freeMode: false,
      loop: false,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, totalClass) {
          // console.log('a',currentClass)
          // if(currentClass == 1){
          //   console.log('==1')
          //   this.$el.find('.swiper-pagination').css('display','none')
          // }
          return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
        },
      },
      mousewheel: {
        releaseOnEdges: true,
      },
      on:{
        init: function(){
          var activeIndex = this.activeIndex;
          if(activeIndex == 0){
            this.$el.find('.swiper-pagination').css('display','none')
          }
        },
        slideChangeTransitionEnd: function(){
          var activeIndex = this.activeIndex;
          // console.log(activeIndex)
          if(activeIndex != 0){
            // console.log('==0')
            // console.log(this)
            this.$el.find('.swiper-pagination').css('display','block')
          }else{
            this.$el.find('.swiper-pagination').css('display','none')
          }
        },
        touchMove: function(event){
          var activeIndex = this.activeIndex;
          console.log(activeIndex)
          // if(activeIndex == 1){
          //   this.$el.find('.swiper-pagination').css('display','none')
          // }
        }
      }
    })
    //热卖    
    var bannerSwiper = new Swiper('.banner', {
      loop: false
    });
    var nav = new Swiper('#list',{
      allowSlideNext : false,
      allowSlidePrev : false,
    })
  },
  computed:{

  }
}
</script>

<style>
@import url("./assets/swiper.min.css");
html,body{
  position:relative;
  height:100%;
}
html {
  overflow:hidden;
}
* {
  padding:0;
  margin:0;
}
li {
  list-style:none;
}
body {
  background:#fff;
  font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size:12px;
}
#app{
  width:100%;
  height:100%;
}
</style>
