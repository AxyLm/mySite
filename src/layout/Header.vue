<template>
	<header class="sticky top-0 flex justify-between items-center h-20 px-10 header">
		<div></div>
		<div>
			<button class="w-8 text-center nav-btn" @click="themeAni">
				<i-carbon-sun class="h-6 w-6" v-if="!isDark" />
				<i-carbon-moon class="h-6 w-6" v-else />
			</button>

			<button class="nav-btn" @click="toggleLocale()">
				<i-carbon-language class="h-6 w-6" />
			</button>
		</div>
	</header>
</template>
<script setup lang="ts" >
	import { isDark } from "~/composables";
	// import { useI18n } from "vue-i18n";
	import { useI18n, useThemeChang } from "~/composables";
	const { t, toggleLocale } = useI18n();

	const { themeAni } = useThemeChang(isDark);
</script>
<style lang="less" scoped>
.header {
	backdrop-filter: saturate(180%) blur(20px);
	box-shadow: 0px 0px 25px 5px rgb(10 10 10 / 12%);
	@apply bg-base-1 dark:bg-base-13 bg-opacity-70 dark:bg-opacity-75;
}
</style>