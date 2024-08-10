<script lang="ts">
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Preload from '$lib/components/loading/preload.svelte';
</script>

<div>
	<a href="/about">
		<HorizontalStack classes="items-center" inline={true}>
			<Preload classes="overflow-hidden rounded-full" src="/images/about/headshot-128px.png">
				<img
					alt="Professional headshot of Jack Reimers"
					class="h-14 w-14 bg-gray-200 sm:h-16 sm:w-16"
					src="/images/about/headshot-128px.png"
				/>
			</Preload>
			<div>
				<p class="font-medium !leading-none sm:text-lg">Jack Reimers</p>
				<p class="text-sm text-gray-500 sm:text-base">@jackreimers</p>
			</div>
		</HorizontalStack>
	</a>
</div>
