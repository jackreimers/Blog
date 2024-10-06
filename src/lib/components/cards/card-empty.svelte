<script lang="ts">
	import { CircleDashed } from 'lucide-svelte';

	export let classes = '';
</script>

<div
	class="flex items-center justify-center rounded-lg bg-gray-100 text-gray-300 shadow-inner {classes}"
>
	<CircleDashed class="h-24 w-24" />
</div>
