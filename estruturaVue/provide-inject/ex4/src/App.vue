<script>
import { computed } from 'vue';
import ShowInfo from './components/ShowInfo.vue';
export default {
	data() {
		return {
			req: 'https://random-data-api.com/api/v2/users',
			userData: null,
		};
	},
	methods: {
		async getUserData() {
			this.userData = null;
			let response = await fetch(this.req);
			if (response === 'Retry later') {
				return;
			}
			let data = await response.json();
			setTimeout(() => {
				this.userData = data;
			}, 1000);
			console.log(data);
		},
	},
	beforeMount() {
		this.getUserData();
	},
	provide() {
		return {
			userData: computed(() => this.userData),
		};
	},
	components: {
		ShowInfo,
	},
};
</script>

<template>
	<div class="grid grid-cols-1 gap-10 bg-gray-200 place-items-center">
		<button
			type="button"
			@click.stop="getUserData"
			class="bg-rose-400 hover:bg-rose-600 rounded-2xl p-3 m-3 hover:scale-105 transition-all ease-linear duration-200 w-1/2"
		>
			Redo fetch
		</button>
		<ShowInfo></ShowInfo>
	</div>
</template>

<style></style>
