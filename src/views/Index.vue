<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<img alt="Vue logo" src="/src/assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

	<span class="nes-text is-primary">Primary</span>
	<span class="nes-text is-success">Success</span>
	<span class="nes-text is-warning">Warning</span>
	<span class="nes-text is-error">Error</span>
	<span class="nes-text is-disabled">Disabled</span>

	<a class="nes-btn" href="#">Normal</a>

	<button type="button" class="nes-btn is-primary">Primary</button>
	<button type="button" class="nes-btn is-success">Success</button>
	<button type="button" class="nes-btn is-warning">Warning</button>
	<button type="button" class="nes-btn is-error">Error</button>
	<button type="button" class="nes-btn is-disabled">Disabled</button>

	<label class="nes-btn">
		<span>Select your file</span>
		<input type="file" />
	</label>

	<!-- Dialog -->
	<section>
		<button
			type="button"
			class="nes-btn is-primary"
			onclick="document.getElementById('dialog-default').showModal();"
		>Open dialog</button>
		<dialog class="nes-dialog" id="dialog-default">
			<form method="dialog">
				<p class="title">Dialog</p>
				<p>Alert: this is a dialog.</p>
				<menu class="dialog-menu">
					<button class="nes-btn">Cancel</button>
					<button class="nes-btn is-primary">Confirm</button>
				</menu>
			</form>
		</dialog>
	</section>
</template>

<style>
@import "nes.css.14x/css/nes.css";
@import "nes.css.14x/css/nes.min.css";
@import "nes.css.14x/css/nes-core.min.css";

#app {
	font-family: ZpixReviewLocal, ZpixReviewOnline, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
