<script>
import RecursoWeb from './RecursoWeb.vue';
import FormNewRecurso from './FormNewRecurso.vue';

export default {
	data() {
		return {
			showComp: true,
		};
	},
	computed: {
		selectedComp() {
			return this.showComp ? 'RecursoWeb' : 'FormNewRecurso';
		},
	},
	components: {
		RecursoWeb,
		FormNewRecurso,
	},
	methods: {
		changeShow() {
			this.showComp = !this.showComp;
		},
	},
};
</script>

<template>
	<div class="grid grid-cols-2 place-items-center">
		<button
			class="bg-violet-400 hover:bg-violet-600 rounded-3xl hover:rounded-xl transition-all ease-linear duration-200 p-3 m-3"
			type="button"
			@click.stop="showComp = true"
		>
			Recursos Web
		</button>

		<button
			class="bg-violet-400 hover:bg-violet-600 rounded-3xl hover:rounded-xl transition-all ease-linear duration-200 p-3 m-3"
			type="button"
			@click.stop="showComp = false"
		>
			Engadir novo recurso
		</button>
	</div>

	<KeepAlive>
		<component :is="selectedComp"></component>
	</KeepAlive>
</template>
