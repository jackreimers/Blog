<script lang="ts">
	import Header from '$lib/components/layout/headers/header-page.svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button-primary.svelte';
	import Icon from '$lib/components/text/icon.svelte';

	async function handleSortClicked() {}
</script>

<svelte:head>
	<title>Jack Reimers | Projects</title>
</svelte:head>

<Header title="Projects" infoIcon="quick_reference_all">
	<HorizontalStack>
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
	</HorizontalStack>
</Header>
