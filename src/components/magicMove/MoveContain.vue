<template>
	<div  :style="style">
		<slot v-bind="metaData.attrs"></slot>
	</div>
</template>
<script setup lang="ts">
	import { useElementBounding } from "@vueuse/core";
	import { StyleValue } from "vue-demi";
	import { metaData, proxyEl } from "./state";

	// const rect = ref<DOMRect>();

	// watch(proxyEl, (el) => {
	// 	console.log(el?.getBoundingClientRect());

	// 	rect.value = el?.getBoundingClientRect();
	// });
	const rect = reactive(useElementBounding(proxyEl))
	console.log({rect});
	
	const style = computed((): StyleValue => {
		return {
			transition: "all 2s ease",
			position: "fixed",
			top: `${rect?.top ?? 0}px`,
			left: `${rect?.left ?? 0}px`,
		};
	});
</script>