<script>
import Info from '@/components/Info.vue';
export default {
	data() {
		return {
			nome: '',
			anoNacemento: 0,
		};
	},
};
</script>

<template>
	<Info :nome="nome" :anoNacemento="anoNacemento"></Info>
</template>

<style></style>
