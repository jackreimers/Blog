<script lang="ts">
	import { CheckCircle } from 'lucide-svelte';

	export let text: string;
	export let classes: string = '';
</script>

<li class="flex gap-3 {classes}">
	<span class="block text-green-500">
		<CheckCircle />
	</span>
	<span class="block">{text}</span>
</li>
