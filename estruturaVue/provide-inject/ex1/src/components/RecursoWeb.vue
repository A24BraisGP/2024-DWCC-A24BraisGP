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
	inject: ['recursosWeb', 'eliminarRecurso'],
};
</script>

<template>
	<div v-for="recurso in recursosWeb" :key="id">
		<div
			class="border-2 rounded-2xl hover:scale-110 transition-all ease-linear duration-300 flex-w-screen justify-center items-center p-4 my-4 shadow-2xl"
		>
			<p class="text-2xl text-gray-600">Titulo: {{ recurso.titulo }}</p>
			<p>Descricion: {{ recurso.descricion }}</p>
			<a
				class="block hover:underline hover:text-orange-400"
				target="_blank"
				:href="recurso.ligazon"
				>Ligazon do recurso</a
			>
			<button
				type="button"
				class="bg-red-400 hover:bg-red-600 rounded-2xl hover:rounded-xl transition-all ease-linear duration-200 p-1 m-1"
				@click.stop="eliminarRecurso(recurso.id)"
			>
				Eliminar recurso
			</button>
		</div>
	</div>
</template>
