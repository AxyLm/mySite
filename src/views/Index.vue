<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

	import { useI18n } from "vue-i18n";
	import {} from "~/composables";
	const { t } = useI18n();
</script>

<template>
	<div class="text-center p-20">
		<!-- <span class="text-5xl fm1">{{t("hello")}}</span>
		<span class="text-5xl fm2">{{t("hello")}}</span>-->
		<router-link to="/foo">
			<button
				class="bg-purple-600 w-16 h-6 bg-blue-6 text-gray-50 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
			>Foo</button>
		</router-link>
		<router-link to="/about">
			<button
				class="ml-3 bg-purple-600 w-16 h-6 bg-blue-6 text-gray-50 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
			>Back</button>
		</router-link>
		<div>
			<router-view />
		</div>
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
