<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import '@/assets/tailwind.css';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faStar, faStarHalfAlt);

export default {
	data() {
		return {
			isHidden: true,
		};
	},
	props: {
		id: { type: Number, required: true },
		nome: { type: String, required: true },
		telefono: { type: Number, required: true, default: 999999999 },
		email: { type: String, required: true },
		isFav: { type: Boolean, default: false },
	},
	computed: {
		text() {
			return this.isHidden ? 'Mostrar Detalles' : 'Ocultar Detalles';
		},
		fav() {
			return this.isFav ? 'fa-solid fa-star' : 'fa-regular fa-star';
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
	emits: ['cambiarFav', 'deleteContact'],
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
			@click.stop="$emit('cambiarFav', id)"
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
			<h6 class="text-l">Telefono: {{ telefono }}</h6>
			<h6 class="text-l">Email: {{ email }}</h6>
			<button
				type="button"
				class="rounded bg-gray-400 hover:bg-gray-700 p-2 m-3"
				@click.stop="$emit('deleteContact', id)"
			>
				Delete
			</button>
		</div>
	</div>
</template>

<style></style>
