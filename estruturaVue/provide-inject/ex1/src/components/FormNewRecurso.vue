<script>
export default {
	data() {
		return {
			newTitulo: '',
			newDescricion: '',
			newLigazon: '',
			showMask: false,
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
			return this.newTitulo == '' ||
				this.newDescricion == '' ||
				this.newLigazon == ''
				? true
				: false;
		},
	},
	methods: {
		checkShowMask() {
			if (this.showMask == false && this.formIncomplete == false) {
				this.addNewRecurso(
					this.getHigherId,
					this.newTitulo,
					this.newDescricion,
					this.newLigazon
				);
			} else {
				this.showMask = !this.showMask;
			}
		},
	},
};
</script>

<template>
	<div class="grid grid-cols-1 place-items-center">
		<form action="" class="border-2">
			<input v-model="newId" hidden />
			<input v-model="newTitulo" class="border-2" />Titulo
			<input v-model="newDescricion" class="border-2" />Descricion
			<input v-model="newLigazon" class="border-2" />Ligazon
			<button
				type="button"
				@click.stop="checkShowMask"
				class="bg-red-300 hover:bg-amber-500 p-3 rounded-2xl"
			>
				Crear Recurso
			</button>
		</form>
	</div>
	<teleport to="body">
		<div v-if="formIncomplete && showMask">
			<div class="flex h-screen justify-center items-center gap-2">
				<div class="modal-mask">
					<div class="modal-container">
						<div class="text-centered items-center">
							<p
								class="text-center bg-gray-300 border-2 text-black mb-2"
							>
								FORM MUST BE COMPLETE TO ADD
							</p>
							<button
								class="border-2 bg-amber-400 hover:bg-amber-600 p-3 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear self-center"
								@click.stop="showMask = false"
							>
								Return
							</button>
						</div>
					</div>
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
