<template>
	<div class="swiper-container banner">
		<div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="item in one">
		      	<img :src="item.img"></div>
		    <div class="swiper-slide">
		      	<img src="../assets/images/product2.png"></div>
		    <div class="swiper-slide">
		      	<img src="../assets/images/product3.png"></div>
		</div>
	</div>
</template>


<script>
export default {
	// props: ['one'],
  props: ['one'],
  data () {
    return {
    }
  },
  computed: {
    // datas: function () {
    //   return this.one
    // }
  },
  created(){
  	console.log('created')
  	// console.log(one)
  },
  activated(){
  	console.log('activated')
  	// console.log(one)
  }
}
</script>

<style scoped>

.banner{
  width:100%;
  height:100%;
  display:block;
}
.banner img {
  width:100%;
  height:100%;
  display:block;
}
</style>




