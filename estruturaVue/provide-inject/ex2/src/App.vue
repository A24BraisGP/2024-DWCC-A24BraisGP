<script>
import { computed } from 'vue';
import ListaPersonas from './components/ListaPersonas.vue';

export default {
	data() {
		return {
			personas: [
				{
					id: 1,
					nome: 'Ada',
					apelido: 'Lovelace',
				},
			],
		};
	},
	computed: {
		getRandomId() {
			return Math.floor(Math.random() * 10000);
		},
	},
	methods: {
		engadirPersoa(newNome, newApelido) {
			this.personas.push({
				id: this.getRandomId,
				nome: newNome,
				apelido: newApelido,
			});
		},
		actualizarPersoa(newNome, newApelido, id) {
			if (this.personas.some((el) => el.id === id)) {
				let pAct = this.personas.find((el) => el.id === id);
				pAct.nome = newNome;
				pAct.apelido = newApelido;
				console.log(pAct);
			}
		},
		borrarPersoa(id) {
			let ind = this.personas.findIndex((el) => el.id === id);
			if (ind != -1) {
				this.personas.splice(ind, 1);
			}
		},
	},
	provide() {
		return {
			personas: computed(() => this.personas),
			engadirPersoa: this.engadirPersoa,
			actualizarPersoa: this.actualizarPersoa,
			borrarPersoa: this.borrarPersoa,
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
