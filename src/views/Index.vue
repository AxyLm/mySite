<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

	import { useI18n } from "vue-i18n";
	import {} from "~/composables";
	const { t } = useI18n();
</script>

<template>
	<div class="text-center py-10 px-10">
		<!-- <span class="text-5xl fm1">{{t("hello")}}</span>
		<span class="text-5xl fm2">{{t("hello")}}</span>-->
		
		
		<div class="mt-10"></div>
		<router-view />
		<move-contain v-slot="slot">
			<Image v-bind="slot" />
		</move-contain>
		<!-- <Footer /> -->
	</div>
</template>

<style lang="less">
.wrap {
	height: 100vh;
}
.fm1 {
	font-family: "Josefin Sans", sans-serif;
}
.fm2 {
	font-family: sans-serif;
}
</style>
