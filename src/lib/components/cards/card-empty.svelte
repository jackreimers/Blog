<script lang="ts">
	import { CircleEllipsis } from 'lucide-svelte';

	export let classes = '';
</script>

<div
	class="flex items-center justify-center rounded-lg bg-gray-100 text-gray-300 shadow-inner {classes}"
>
	<CircleEllipsis size="72" />
</div>
