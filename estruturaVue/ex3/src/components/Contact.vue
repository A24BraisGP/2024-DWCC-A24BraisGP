<script>
import '@/assets/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faStar, faStarHalfAlt);
export default {
	data() {
		return {
			isHidden: true,
			isFav: true,
		};
	},
	props: {
		nome: { type: String, required: true },
		telefono: { type: Number, required: true, default: 999999999 },
		email: { type: String, required: true },
	},
	computed: {
		text() {
			return this.isHidden ? 'Mostrar Detalles' : 'Ocultar Detalles';
		},
		fav() {
			return this.isFav ? 'fa-regular fa-star' : 'fa-solid fa-star';
		},
	},
	methods: {
		mostrarOcultar() {
			return (this.isHidden = !this.isHidden);
		},
		cambiarFav() {
			this.isFav = !this.isFav;
		},
	},
};
</script>

<template>
	<div>
		<h4 class="text-xl">
			{{ nome }}
			<font-awesome-icon :icon="fav"></font-awesome-icon>
		</h4>
		<button
			class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded my-3"
			@click.stop="cambiarFav"
		>
			Favorito
		</button>

		<br />
		<button
			type="button"
			@click.stop="mostrarOcultar"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
		>
			{{ text }}
		</button>
		<div v-if="!isHidden">
			<h6 class="text-l">{{ telefono }}</h6>
			<h6 class="text-l">{{ email }}</h6>
		</div>
	</div>
</template>

<style></style>
