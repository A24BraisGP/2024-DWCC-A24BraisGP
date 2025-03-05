<script>
import { Octokit } from '@octokit/core';
import { computed } from 'vue';
import ShowCommit from './components/ShowCommit.vue';
export default {
	data() {
		return {
			data: null,
		};
	},
	methods: {
		async peticionGitHub() {
			const octokit = new Octokit({
				auth: '',
			});

			try {
				let response = await octokit.request(
					'GET /repos/vuejs/core/commits/',
					{
						owner: 'vuejs',
						repo: 'core',
						headers: {
							'X-GitHub-Api-Version': '2022-11-28',
						},
					}
				);

				this.data = response.data;
			} catch (error) {
				console.error('error no fetch' + error);
			}
		},
	},
	beforeMount() {
		this.peticionGitHub();
	},
	provide() {
		return {
			dataCommit: computed(() => this.data),
		};
	},
	components: {
		ShowCommit,
	},
};
</script>

<template>
	<ShowCommit></ShowCommit>
</template>
