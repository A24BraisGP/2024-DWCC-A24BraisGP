<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			telefono: 1,
		};
	},
	emits: ['addContact'],
};
</script>

<template>
	<div
		class="container mx-auto flex-auto justify-center my-6 bg-gray-500 rounded"
	>
		<form action="" method="get">
			<label for="name"> Name: </label>
			<input v-model="name" />
			<label for="email">Email:</label>
			<input v-model="email" />
			<label for="telefono">Telefono:</label>
			<input v-model="telefono" />
			<div class="container mx-auto flex-auto justify-center my-6">
				<button
					type="button"
					class="bg-green-500 hover:bg-green-700 text-white font-bold p-4 m-4 rounded"
					@click.stop="
						$emit(
							'addContact',
							this.name,
							this.email,
							this.telefono
						)
					"
				>
					Crear Contacto
				</button>
			</div>
		</form>
	</div>
</template>

<style></style>
