<template> 
<div class="overflow-hidden bg-blue-3 transition-all" ref="el">
    <slot/>
</div>
</template>
<script setup lang="ts">
	import { metaData,proxyEl } from "./state";
	const props = defineProps();
    const el = ref<HTMLElement>()
	const attrs = useAttrs();
	metaData.props = props;
	metaData.attrs = attrs;

    onMounted(()=>{
        proxyEl.value = el.value
    })
    console.log(metaData.value)
</script>