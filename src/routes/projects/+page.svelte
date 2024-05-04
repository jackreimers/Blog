<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import PageTitle from '$lib/components/layout/page-header-title.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Skeleton from '$lib/components/loading/skeleton.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	async function handleSortClicked() {}
</script>

<svelte:head>
	<title>Jack Reimers | Projects</title>
</svelte:head>

<PageHeader>
	<PageTitle slot="title">Projects</PageTitle>
	<div slot="info" class="flex items-center font-medium leading-none">
		<Icon
			icon="description"
			weight={400}
			classes="mr-2 rounded bg-blue-800 p-1 text-white sm:mr-2.5 sm:p-1.5"
		/>
		<Skeleton>
			<p>0 Posts</p>
		</Skeleton>
	</div>
	<div slot="actions" class="flex flex-wrap gap-2.5 sm:gap-3.5">
		<Button on:click={handleSortClicked}>
			<span slot="text">Date</span>
			<span slot="icon" class="transform-gpu {true ? '-rotate-90' : 'rotate-90'}">
				<Icon icon="arrow_right_alt" />
			</span>
		</Button>
		<Button>
			<span slot="text">Tags</span>
			<Icon slot="icon" icon="sort" />
		</Button>
	</div>
</PageHeader>
