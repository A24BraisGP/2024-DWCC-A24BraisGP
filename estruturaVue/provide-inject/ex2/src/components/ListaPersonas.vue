<script>
export default {
	data() {
		return {
			newNome: '',
			newApelido: '',
			filtroAp: '',
			persoasFiltradas: this.personas,
			id: 0,
		};
	},
	inject: ['personas', 'engadirPersoa', 'actualizarPersoa', 'borrarPersoa'],
	methods: {
		cambiarListaApelido(event) {
			this.persoasFiltradas = this.personas.filter((el) =>
				el.apelido.startsWith(event.target.value)
			);
		},
		encherDatos(nome, apelido, id) {
			let nomeInput = document.getElementById('nomeInput');
			let apelidoInput = document.getElementById('apelidoInput');
			nomeInput.value = nome;
			apelidoInput.value = apelido;
			this.newNome = nome;
			this.newApelido = apelido;
			this.id = id;
		},
	},
};
</script>

<template>
	<div class="flex justify-center items-center">
		<input
			v-model="filtroAp"
			placeholder="Filtrar por apelido"
			class="border-2 rounded-xl p-2"
			@input="cambiarListaApelido"
		/>
	</div>
	<div
		id="personasDiv"
		class="bg-gray-200 flex justify-center items-center flex-wrap"
	>
		<select name="persoasSelect" multiple>
			<option
				v-for="persona in persoasFiltradas"
				:key="persona.id"
				:value="persona.id"
				class="border-2 m-2 rounded-2xl hover:rounded-xl hover:bg-gray-600 hover:text-white transition-all ease-linear duration-300 p-2"
				@click.stop="
					encherDatos(persona.nome, persona.apelido, persona.id)
				"
			>
				<p>{{ persona.apelido }}, {{ persona.nome }}</p>
			</option>
		</select>
	</div>
	<div class="flex justify-center items-center">
		<label for="nome">Nome:</label>
		<input
			v-model="newNome"
			id="nomeInput"
			class="border-2 rounded-xl p-2 m-2"
		/>
		<label for="apelido">Apelido:</label>
		<input
			v-model="newApelido"
			id="apelidoInput"
			class="border-2 rounded-xl p-2 m-2"
		/>
	</div>
	<div class="flex justify-center items-center">
		<button
			type="button"
			class="p-3 m-3 bg-amber-300 hover:bg-amber-700 hover:rounded-xl rounded-2xl transition-all ease-linear duration-300"
			@click.stop="engadirPersoa(newNome, newApelido)"
		>
			Engadir Persoa
		</button>
		<button
			type="button"
			class="p-3 m-3 bg-amber-300 hover:bg-amber-700 hover:rounded-xl rounded-2xl transition-all ease-linear duration-300 disabled:bg-gray-300"
			@click.stop="actualizarPersoa(newNome, newApelido, id)"
		>
			Actualizar Persoa
		</button>
		<button
			type="button"
			class="p-3 m-3 bg-amber-300 hover:bg-amber-700 hover:rounded-xl rounded-2xl transition-all ease-linear duration-300 disabled:bg-gray-300"
			@click.stop="borrarPersoa(id)"
		>
			Borrar Persoa
		</button>
	</div>
</template>
