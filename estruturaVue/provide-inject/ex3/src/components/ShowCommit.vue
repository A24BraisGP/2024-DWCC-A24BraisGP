<script>
export default {
	data() {
		return {};
	},
	inject: ['dataCommit'],
};
</script>

<template>
	<div class="grid place-items-center grid-cols-1 gap-10 mx-4 my-4">
		<div
			v-for="(commit, index) in dataCommit"
			:key="index"
			class="shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
		>
			<img :src="commit.author.avatar_url" width="32" height="32" />
			<p class="text-2xl">
				{{ commit.author.login }}
			</p>
			<p class="text-xl">{{ commit.commit.committer.name }}</p>
			- {{ commit.commit.message }} -
			<p
				v-if="commit.commit.verification.verified"
				class="text-green-600 outline-2 p-1 hover:underline inline"
			>
				Verified
			</p>
			<p v-else class="text-red-600 outline-2 inline">NOT Verified</p>
			<br />
			<a
				:href="commit.html_url"
				class="underline hover:bg-blue-400 transition-all ease-linear duration-200 rounded-xl p-1 block-inline"
				target="_blank"
				>URL to the commit</a
			>
		</div>
	</div>
</template>
