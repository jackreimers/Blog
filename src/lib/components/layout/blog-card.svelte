<script lang="ts">
	import Icon from '$lib/components/text/icon.svelte';
	import Button from '$lib/components/buttons/button.svelte';
	import type { BlogPost } from '$lib/types/types';
	import { getDateString } from '$lib/functions/functions';

	export let data: BlogPost;
</script>

<div class="flex flex-col gap-1 rounded bg-gray-100 px-4 py-3.5">
	<p class="text-sm font-medium">{getDateString(data.metadata.date)}</p>
	<!-- TODO: Hover effects on links -->
	<Button href="/blog/{data.metadata.slug}" classes="flex">
		<span class="font-bold">{data.metadata.title}</span>
	</Button>
	<p class="">{data.intro}</p>
	<!--
    <div class="mb-8 flex gap-2">
        {#each data.metadata.categories as category}
            <Button onClick={() => {}} classes="bg-gray-100">
                <p class="font-semibold">{category.name}</p>
            </Button>
        {/each}
    </div>
    <div class="flex">
        <Button href="/blog/{data.metadata.slug}">
            <span class="flex font-bold">
                Read more &nbsp
                <Icon icon="arrow_forward" />
            </span>
        </Button>
    </div>
    -->
</div>
