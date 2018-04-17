<template>
	<div class="swiper-container banner">
		<div class="swiper-wrapper">
		    <div class="swiper-slide">
		      	<img src="../assets/images/product1.png"></div>
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
  data () {
    return {
    	one:[]
    }
  },
  created(){
  	console.log('created')
  	
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




