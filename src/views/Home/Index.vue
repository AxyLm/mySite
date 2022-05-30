<script setup lang="ts">
	import { useI18n } from "vue-i18n";
	import { ref } from "vue";
	import Abi from "./perp.json";
	import {
		parameterGen,
		contractReadRule,
		contractWriteRule,
		abiFn,
	} from "~/util/abiGenRule";
	const { t } = useI18n();
	console.log(Abi);

	const abiJson = ref<string>(JSON.stringify(Abi));
	const classGen = ref();
	const fnGenRule = ref({
		read: true,
		write: false,
		event: false,
		nameFilter: undefined,
	});
	const genClass = () => {
		console.log(abiJson.value);
		const AbiJson: abiFn[] = JSON.parse(abiJson.value);

		const code = AbiJson.map((e) => {
			if (e.type === "function") {
				if (fnGenRule.value.nameFilter) {
					const nameFilter: string = fnGenRule.value.nameFilter;
					let nameFilters: string[] = [nameFilter];
					if (nameFilter.indexOf(",") > -1) {
						nameFilters = nameFilter.split(",");
					}

					if (nameFilters.every((filter) => e.name.indexOf(filter) == -1)) {
						return undefined
					}
				}

				if (fnGenRule.value.read && e.stateMutability === "view") {
					const str = contractReadRule(e);
					console.log(str);
					return str;
				}

				if (fnGenRule.value.write && e.stateMutability === "nonpayable") {
					const str = contractWriteRule(e);
					console.log(str);
					return str;
				}
			}

			return undefined;
		});
		classGen.value = code.filter((e) => !!e).join("");
	};
</script>

<template>
	<div class="text-center p-20">
		<div>
			<textarea v-model="abiJson" cols="100" rows="10"></textarea>
		</div>
		<div>
			<label>fn name filter</label>
			<input type="text" v-model="fnGenRule.nameFilter" placeholder="关键字、regexp；多个用,分割" /><button @click="fnGenRule.nameFilter = undefined">

				<i-carbon:close />
			</button>
			<br/>
			<label>read</label>
			<input type="checkbox" name="read" v-model="fnGenRule.read" />

			<label>write</label>
			<input type="checkbox" name="write" v-model="fnGenRule.write" />
			<span class="line-through">
				<label>event</label>
				<input type="checkbox" name="event" disabled v-model="fnGenRule.event" />
			</span>
		</div>
		<button @click="genClass">gen</button>
		<div>
			<textarea v-model="classGen" cols="100" rows="20"></textarea>
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
