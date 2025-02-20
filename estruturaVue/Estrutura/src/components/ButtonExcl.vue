<script>
export default {
	data() {
		return {};
	},
	methods: {
		addExcl() {
			return (this.$root.message += '!');
		},
	},
};
</script>
<template>
	<button type="button" @click="addExcl">addExcl</button>
</template>
<style></style>
