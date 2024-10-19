<script lang="ts">
	import { AppWindow, BrainCircuit, Monitor, Network } from 'lucide-svelte';
	import ServiceCard from '$lib/components/cards/service/service-card.svelte';
</script>

<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 xl:grid-cols-4">
	<ServiceCard
		icon={Monitor}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Websites"
	/>
	<ServiceCard
		icon={AppWindow}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Web Applications"
	/>
	<ServiceCard
		icon={Network}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="API Development"
	/>
	<ServiceCard
		icon={BrainCircuit}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Artificial Intelligence"
	/>
</div>
