<script>
export default {
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		incrementCount() {
			this.count++;
		},
	},
};
</script>

<template>
	<button
		class="bg-yellow-500 hover:bg-yellow-700 p-3 m-3"
		@click.stop="incrementCount"
	>
		{{ count }}
	</button>
</template>
