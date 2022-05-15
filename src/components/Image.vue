<template>
<div @click="state = !state" class="overflow-hidden transition-all duration-1000">
	<img v-if="state" src="http://h2.ioliu.cn/bing/TravertineTurkey_ZH-CN6430409651_1920x1080.jpg?imageslim" class="object-cover w-full h-full"/>
	<img v-else src="http://h2.ioliu.cn/bing/VictoriaMemorialKolkata_ZH-CN5801450386_1920x1080.jpg?imageslim" class="object-cover  w-full  h-full"/>
</div>
</template>
<script setup lang="ts">
	const state = ref(false);
	onMounted(()=>{
		console.log("image mounted")
	})
</script>