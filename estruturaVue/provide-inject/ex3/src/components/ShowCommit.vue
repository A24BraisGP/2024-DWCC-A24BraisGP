<script>
export default {
	data() {
		return {};
	},
	inject: ['dataCommit'],
};
</script>

<template>
	<div>
		<p v-for="(commit, index) in dataCommit" :key="index">
			{{ commit.commit.committer.name }}
		</p>
	</div>
</template>
