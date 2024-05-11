<script lang="ts">
	import Header from '$lib/components/layout/headers/header-page.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import EmptyMessage from '$lib/components/loading/empty-message.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	async function handleSortClicked() {
		data.filters.newest = !data.filters.newest;
	}

	async function getPostCount(): Promise<string> {
		return new Promise(async (resolve) => {
			const posts = await data.posts;
			const value = `${posts.length.toString()} ${posts.length === 1 ? ' Post' : ' Posts'}`;
			resolve(value);
		});
	}
</script>

<svelte:head>
	<title>Jack Reimers | Projects</title>
</svelte:head>

<Header title="Projects" infoIcon="quick_reference_all" infoText="0 Posts">
	<HorizontalStack>
		<Button on:click={handleSortClicked}>
			<span slot="text">Date</span>
			<span
				slot="icon"
				class="transform-gpu {data.filters.newest ? '-rotate-90' : 'rotate-90'}"
			>
				<Icon icon="arrow_right_alt" />
			</span>
		</Button>
		<!--
		<Button>
			<span slot="text">Tags</span>
			<Icon slot="icon" icon="sort" />
		</Button>
		-->
	</HorizontalStack>
</Header>

<EmptyMessage />
