<script>
import ModalWindow from './components/ModalWindow.vue';

export default {
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		changueModal() {
			this.showModal = !this.showModal;
		},
	},
	components: {
		ModalWindow,
	},
};
</script>

<template>
	<button
		class="btn bg-blue-500 hover:bg-blue-700 rounded p-3 m-4 text-white text-2xl"
		@click="changueModal"
	>
		Show modal Window
	</button>

	<ModalWindow v-if="showModal">
		<template #header>
			<p class="underline decoration-sky-500">This is the header</p>
		</template>
		<p class="bg-red-500 text-dark">This is the paragraph</p>

		<template #footer>
			<p class="underline decoration-red-500">This is the footer</p>
			<button
				class="bg-yellow-500 hover:bg-yellow-700 p-3 m-4"
				@click="changueModal"
			>
				Return
			</button>
		</template>
	</ModalWindow>
</template>
