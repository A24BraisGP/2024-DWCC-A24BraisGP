<script>
export default {
	data() {
		return {
			isUpper: false,
		};
	},
	methods: {
		toUpper() {
			this.isUpper
				? (this.$root.message = this.$root.message.toUpperCase())
				: (this.$root.message = this.$root.message.toLowerCase());
			this.isUpper = !this.isUpper;
		},
	},
};
</script>

<template>
	<button @click="toUpper">Changue upper / lower</button>
</template>

<style></style>
