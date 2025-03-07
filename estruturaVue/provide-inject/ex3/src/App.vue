<script>
import { Octokit } from '@octokit/core';
import { computed } from 'vue';
import ShowCommit from './components/ShowCommit.vue';
export default {
	data() {
		return {
			data: null,
			newOwner: '',
			newRepo: '',
			howMany: 0,
		};
	},
	methods: {
		async peticionGitHub() {
			const octokit = new Octokit({
				auth: '-',
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
				console.log(response.data);

				this.data = response.data;
			} catch (error) {
				console.error('error no fetch' + error);
			}
		},
		async newGitHubRequest(newOwner, newRepo, howMany) {
			if (newOwner == '') {
				return;
			}
			if (howMany <= 0) {
				const octokit = new Octokit({
					auth: '-',
				});

				try {
					let response = await octokit.request(
						`GET /repos/${newOwner}/${newRepo}/commits/`,
						{
							owner: 'vuejs',
							repo: 'core',
							headers: {
								'X-GitHub-Api-Version': '2022-11-28',
							},
						}
					);
					console.log(response.data);

					this.data = response.data;
				} catch (error) {
					console.error('error no fetch' + error);
				}
			} else {
				const octokit = new Octokit({
					auth: '-',
				});

				try {
					let response = await octokit.request(
						`GET /repos/${newOwner}/${newRepo}/commits?per_page=${howMany}`,
						{
							owner: 'vuejs',
							repo: 'core',
							headers: {
								'X-GitHub-Api-Version': '2022-11-28',
							},
						}
					);
					console.log(response.data);

					this.data = response.data;
				} catch (error) {
					console.error('error no fetch' + error);
				}
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
	<div class="container md grid grid-cols-1 place-items-center mx-auto gap-2">
		<form action="">
			<label
				for="newOwner"
				class="block mb-2 text-sm font-medium text-gray-900"
				>New Owner</label
			>
			<input
				v-model="newOwner"
				id="newOwner"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			<label
				for="newRepo"
				class="block mb-2 text-sm font-medium text-gray-900"
				>New Repo</label
			>
			<input
				v-model="newRepo"
				id="newRepo"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			<label for="howMany">How many commits:</label>
			<input
				v-model="howMany"
				id="howMany"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</form>
		<button
			type="button"
			@click.stop="newGitHubRequest(newOwner, newRepo, howMany)"
			class="p-3 bg-gray-900 text-white rounded-3xl hover:rounded-xl transition-all ease-linear duration-200"
		>
			Get New Repo
		</button>
	</div>
	<br />
	<ShowCommit></ShowCommit>
</template>
