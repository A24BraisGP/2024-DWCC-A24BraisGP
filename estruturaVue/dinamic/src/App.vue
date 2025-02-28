<script>
import Count from './components/Count.vue';
import Text from './components/Text.vue';

export default {
	data() {
		return {
			changedComp: true,
		};
	},
	computed: {
		compShowed() {
			return this.changedComp ? 'Count' : 'Text';
		},
	},
	components: {
		Count,
		Text,
	},
};
</script>

<template>
	<div class="grid grid-cols-2 place-items-center bg-gray-300 border rounded">
		<p>Select Your component</p>
		<input v-model="changedComp" type="checkbox" /> {{ compShowed }}
	</div>
	<div class="grid grid-cols-2 place-content-center h-48">
		<KeepAlive>
			<component :is="compShowed"></component>
		</KeepAlive>
	</div>
</template>

<style></style>
