<script>
export default {
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		addCount() {
			return this.count++;
		},
	},
};
</script>

<template>
	<button type="button" @click="addCount">{{ count }}</button>
</template>

<style></style>
