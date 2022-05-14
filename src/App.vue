<script setup lang="ts">
	import { useI18n } from "vue-i18n";
	import { isDark, toggleDark } from "~/composables";

	const { t } = useI18n({});

	console.log(t("my"), isDark, toggleDark);
</script>

<template>
	<div class="i-accessibility"></div>
	<i-carbon-accessibility />
	<span style="font-size:30px; te">
		eaing
		<IconAccountBox />
	</span>
	<router-view />

	<form>
		<input
			class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
		/>
		<button
			class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
			@click="toggleDark"
		>Sign up</button>
	</form>
	<button
		class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
		@click="toggleDark"
	>toggleDark</button>
	<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
		<div class="flex-shrink-0">
			<IconAccountBox class="h-12 w-12" />
		</div>
		<div>
			<div class="text-xl font-medium text-black">ChitChat</div>
			<p class="text-gray-500">You have a new message!</p>
		</div>
	</div>
</template>

<style lang="less">
@import "nes.css.14x/css/nes.css";
@import "nes.css.14x/css/nes.min.css";
@import "nes.css.14x/css/nes-core.min.css";

#app {
	font-family: ZpixReviewLocal, ZpixReviewOnline, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	/* color: #2c3e50; */
	margin-top: 60px;
}
</style>
