<script setup lang="ts">
	import { useI18n } from "vue-i18n";
	import { ref } from "vue";
	import Abi from "./perp.json";
	import {
		contractReadRule,
		contractWriteRule,
		abiFn,
		autoGenClass,
	} from "~/util/abiGenRule";
	const { t } = useI18n();

	const abiJson = ref<string>(JSON.stringify(Abi));
	const classGen = ref();
	const fnGenRule = ref({
		read: true,
		write: false,
		event: false,
		nameFilter: undefined,
	});
	const className = ref("OneAutoGenFun");
	const genClass = () => {
		const AbiJson: abiFn[] = JSON.parse(abiJson.value);

		const code = autoGenClass(className.value	, AbiJson, fnGenRule.value);
		classGen.value = code
	};
</script>

<template>
	<div style="height:calc(100vh - 6rem)">
		<div class="mt-4 px-4">
			<div class="w-1/3">
				<label for="className" class="block mb-1 text-gray-600 text-xl font-medium">class name</label>
				<div class="inline-flex w-full border">
					<input
						type="text"
						class="w-full px-4 py-2 rounded focus:outline-none focus:text-gray-600 bg-transparent"
						v-model="className"
						placeholder="关键字、regexp；多个用,分割"
					/>
					<div class="w-1/12 pt-2 bg-gray-100 text-center" @click="className = ''">
						<i-carbon:close />
					</div>
				</div>
				<label for="Name" class="block mb-1 text-gray-600 text-xl font-medium">fn name filter</label>
				<div class="inline-flex w-full border">
					<input
						type="text"
						class="w-full px-4 py-2 rounded focus:outline-none focus:text-gray-600 bg-transparent"
						v-model="fnGenRule.nameFilter"
						placeholder="关键字、regexp；多个用,分割"
					/>
					<div class="w-1/12 pt-2 bg-gray-100 text-center" @click="fnGenRule.nameFilter = undefined">
						<i-carbon:close />
					</div>
				</div>
				<label>read</label>
				<input type="checkbox" name="read" v-model="fnGenRule.read" />

				<label>write</label>
				<input type="checkbox" name="write" v-model="fnGenRule.write" />
				<span class="line-through">
					<label>event</label>
					<input type="checkbox" name="event" disabled v-model="fnGenRule.event" />
				</span>
				<button
					@click="genClass"
					type="button"
					class="m-1 inline-block text-base-light px-6 py-2.5 bg-blue-6 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-7 hover:shadow-lg focus:bg-blue-7 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-8 active:shadow-lg transition duration-150 ease-in-out"
				>Gen Code</button>
			</div>
		</div>
		<div class="w-full h-4/5 flex dark:text-base-7">
			<textarea
				v-model="abiJson"
				class="w-full h-full m-0 border bg-transparent border-solid border-current mr-1"
			></textarea>
			<textarea
				v-model="classGen"
				class="w-full h-full m-0 border bg-transparent border-solid border-current"
			></textarea>
		</div>
	</div>
</template>

<style lang="less">
.wrap {
	height: 100vh;
}
.fm1 {
	font-family: "Josefin Sans", sans-serif;
	font-weight: 300;
}
.fm2 {
	font-family: sans-serif;
}
</style>
