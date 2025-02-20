<script>
import ButtonCount from './components/ButtonCount.vue';
export default {
	data() {
		return {
			count: 0,
		};
	},
	components: {
		ButtonCount,
	},
};
</script>

<template>
	<div>
		<ButtonCount />
		<ButtonCount />
		<ButtonCount />
	</div>
</template>

<style></style>
