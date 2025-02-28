<script>
export default {
	data() {
		return {
			newTitulo: '',
			newDescricion: '',
			newLigazon: '',
			showModal: false,
		};
	},
	inject: ['addNewRecurso', 'recursosWeb'],
	computed: {
		getHigherId() {
			return Math.max(...this.recursosWeb.map((el) => el.id)) + 1;
		},
		newId() {
			return this.getHigherId;
		},
		formIncomplete() {
			return this.newTitulo != '' &&
				this.newDescricion != '' &&
				this.newLigazon != ''
				? true
				: false;
		},
	},
};
</script>

<template>
	<form action="" class="border-2">
		<input v-model="newId" hidden />
		<input v-model="newTitulo" class="border-2" />Titulo
		<input v-model="newDescricion" class="border-2" />Descricion
		<input v-model="newLigazon" class="border-2" />Ligazon
		<button
			type="button"
			@click.stop="
				addNewRecurso(newId, newTitulo, newDescricion, newLigazon)
			"
			class="bg-red-300 hover:bg-amber-500 p-3 rounded-2xl"
		>
			Crear Recurso
		</button>
	</form>
	<teleport to="body">
		<div v-if="showModal">
			<div class="modal-container">
				<div class="modal-mask">
					<p class="text-center">Form must be complete</p>
					<button class="border-2 p-2" @click.stop="">Return</button>
				</div>
			</div>
		</div>
	</teleport>
</template>

<style>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
}
.modal-container {
	width: 300px;
	border: solid 4px gray;
	border-radius: 2px;
	margin: auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
