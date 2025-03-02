<script>
import { computed } from 'vue';
import ListaPersonas from './components/ListaPersonas.vue';

export default {
	data() {
		return {
			personas: [
				{
					id: 0,
					nome: 'proba1 ',
					apelido: 'proba1 ap',
				},
				{
					id: 1,
					nome: 'proba2',
					apelido: 'proba2 ap',
				},
			],
		};
	},
	computed: {
		getHigherId() {
			return Math.max(...this.personas.map((el) => el.id)) + 1;
		},
	},
	methods: {
		engadirPersoa(newNome, newApelido) {
			this.personas.push({
				id: this.getHigherId,
				nome: newNome,
				apelido: newApelido,
			});
		},
	},
	provide() {
		return {
			personas: computed(() => this.personas),
			engadirPersoa: this.engadirPersoa,
		};
	},
	components: {
		ListaPersonas,
	},
};
</script>

<template>
	<ListaPersonas></ListaPersonas>
</template>

<style></style>
