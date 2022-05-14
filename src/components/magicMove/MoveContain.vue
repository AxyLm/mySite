<template>
	<div class="fixed" :style="style">
		<slot v-bind="metaData.attrs"></slot>
	</div>
</template>
<script setup lang="ts">
	import { useElementBounding } from "@vueuse/core";
import { StyleValue } from "vue-demi";
	import { metaData, proxyEl } from "./state";

	const rect = ref<DOMRect>();

	watch(proxyEl, (el) => {
		console.log(el?.getBoundingClientRect());

		rect.value = el?.getBoundingClientRect();
	});
    // const rect = re(useElementBounding(proxyEl))
	const style = computed((): StyleValue => {
		return {
			transition: "all .3s ease-in-out",
			position: "fixed",
			top: `${rect.value?.top ?? 0}px`,
			left: `${rect.value?.left ?? 0}px`,
		};
	});
</script>