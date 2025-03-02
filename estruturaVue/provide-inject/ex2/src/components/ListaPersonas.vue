<script>
export default {
	data() {
		return {
			newNome: '',
			newApelido: '',
			filtroAp: '',
			persoasFiltradas: this.personas,
		};
	},
	inject: ['personas', 'engadirPersoa'],
	methods: {
		cambiarListaApelido(event) {
			this.persoasFiltradas = this.personas.find((el) =>
				el.apelido.toLowerCase().startsWith(event.target.value)
			);
		},
	},
};
</script>

<template>
	<input
		v-model="filtroAp"
		placeholder="Filtrar por apelido"
		class="border-2 rounded-xl p-2"
		@input="cambiarListaApelido"
	/>
	<div
		id="personasDiv"
		class="bg-gray-200 flex justify-center items-center w-50"
	>
		<button
			type="button"
			v-for="persona in persoasFiltradas"
			:key="persona.id"
			class="border-2 m-2 rounded-2xl hover:rounded-xl hover:bg-gray-600 hover:text-white transition-all ease-linear duration-300 p-2"
		>
			<p>{{ persona.apelido }}, {{ persona.nome }}</p>
		</button>
	</div>

	<label for="nome">Nome:</label>
	<input v-model="newNome" name="nome" class="border-2 rounded-xl p-2" />
	<label for="apelido">Apelido:</label>
	<input
		v-model="newApelido"
		name="apelido"
		class="border-2 rounded-xl p-2"
	/>
	<button @click="engadirPersoa"></button>
</template>
