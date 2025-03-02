<script>
import { computed } from 'vue';
import MainArea from './components/MainArea.vue';

export default {
	data() {
		return {
			recursosWeb: [
				{
					id: 0,
					titulo: 'proba',
					descricion: 'proba descricion',
					ligazon: 'https://google.com',
				},
			],
		};
	},
	provide() {
		return {
			addNewRecurso: this.addNewRecurso,
			recursosWeb: computed(() => this.recursosWeb),
			eliminarRecurso: this.eliminarRecurso,
		};
	},
	components: {
		MainArea,
	},
	methods: {
		addNewRecurso(newId, newTitulo, newDescricion, newLigazon) {
			this.recursosWeb.push({
				id: newId,
				titulo: newTitulo,
				descricion: newDescricion,
				ligazon: newLigazon,
			});
		},
		eliminarRecurso(id) {
			let index = this.recursosWeb.indexOf((el) => el.id === id);
			this.recursosWeb.splice(index, 1);
		},
	},
};
</script>

<template>
	<header>
		<nav
			class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
		>
			<p class="text-center text-3xl text-white">RESOURCES</p>
		</nav>
	</header>

	<div class="grid grid-cols-1 place-items-center w-screen" id="mainAreaDiv">
		<MainArea></MainArea>
	</div>
</template>

<style></style>
