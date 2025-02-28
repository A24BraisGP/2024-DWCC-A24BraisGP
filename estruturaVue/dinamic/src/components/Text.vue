<script>
export default {
	data() {
		return {
			message: '',
		};
	},
};
</script>

<template>
	<div class="grid grid-cols-1 place-content-center h-48">
		<input
			class="border-3 bg-gray-200 focus:bg-white-50 rounded"
			v-model="message"
		/>
		<p>{{ message }}</p>
	</div>
</template>
