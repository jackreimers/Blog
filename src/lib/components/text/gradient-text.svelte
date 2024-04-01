<script lang="ts">
	import { Typography } from '$lib/common/enums.js';

	export let typography: Typography = Typography.Paragraph;
	export let classes: string = '';
</script>

{#if typography === Typography.H1}
	<h1 class="bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent {classes}">
		<slot />
	</h1>
{:else if typography === Typography.H2}
	<h2 class="bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent {classes}">
		<slot />
	</h2>
{:else if typography === Typography.H3}
	<h3 class="bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent {classes}">
		<slot />
	</h3>
{:else if typography === Typography.H4}
	<h4 class="bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent {classes}">
		<slot />
	</h4>
{:else if typography === Typography.H5}
	<h5 class="bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent {classes}">
		<slot />
	</h5>
{:else if typography === Typography.H6}
	<h6 class="bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent {classes}">
		<slot />
	</h6>
{:else if typography === Typography.Paragraph}
	<p class="bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent {classes}">
		<slot />
	</p>
{/if}
