<script>
export default {
	data() {
		return {};
	},
	props: {
		nome: { type: String, required: true },
		anoNacemento: { type: Number, required: true },
	},
};
</script>

<template>
	<p>{{ nome }}</p>
	<p>{{ anoNacemento }}</p>
</template>

<style></style>
