<script>
export default {
	data() {
		return {
			nome: 'Ada Lovelace',
			telefono: '0123456789',
			email: 'ada@lovelace.com',
			isHidden: true,
			btnText: '',
		};
	},
	computed: {
		text() {
			return this.isHidden ? 'Mostrar Detalles' : 'Ocultar Detalles';
		},
	},
	methods: {
		mostrarOcultar() {
			return (this.isHidden = !this.isHidden);
		},
	},
};
</script>

<template>
	<div>
		<h3>Listado</h3>
		<h4>{{ nome }}</h4>
		<button type="button" @click="mostrarOcultar">{{ text }}</button>
		<div v-if="!isHidden">
			<h6>{{ telefono }}</h6>
			<h6>{{ email }}</h6>
		</div>
	</div>
</template>

<style></style>
