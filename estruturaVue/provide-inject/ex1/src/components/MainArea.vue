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
	<button
		class="bg-violet-400 hover:bg-violet-600 p-3 m-3"
		type="button"
		@click.stop="changeShow"
	>
		{{ selectedComp }}
	</button>

	<KeepAlive>
		<component :is="selectedComp"></component>
	</KeepAlive>
</template>
