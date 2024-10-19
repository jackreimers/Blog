<script lang="ts">
	import { CircleDashed } from 'lucide-svelte';
</script>

<div
	class="flex items-center justify-center rounded-lg bg-gray-100 text-gray-200
		{$$restProps.class ?? ''}"
>
	<CircleDashed class="h-24 w-24" />
</div>
