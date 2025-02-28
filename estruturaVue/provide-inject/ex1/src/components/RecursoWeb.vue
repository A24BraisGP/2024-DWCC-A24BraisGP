<script>
export default {
	data() {
		return {
			id: 0,
			titulo: '',
			descricion: '',
			ligazon: '',
		};
	},
	inject: ['recursosWeb'],
};
</script>

<template>
	<div v-for="recurso in recursosWeb" :key="id">
		<p>{{ recurso.titulo }}</p>
		<p>{{ recurso.descricion }}</p>
		<a target="_blank" :href="recurso.ligazon">Ligazon do recurso</a>
	</div>
</template>
