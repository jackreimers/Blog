<script lang="ts">
	import { AppWindow, BrainCircuit, Monitor, Network } from 'lucide-svelte';
	import ServiceCard from '$lib/components/cards/service/service-card.svelte';
</script>

<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 xl:grid-cols-4">
	<ServiceCard
		icon={Monitor}
		subtitle="Custom designed websites tailored to your individual needs."
		title="Websites"
	/>
	<ServiceCard
		icon={AppWindow}
		subtitle="Purpose built web applications to streamline your business."
		title="Web Applications"
	/>
	<ServiceCard
		icon={Network}
		subtitle="Robust and scalable APIs to power your applications."
		title="API Development"
	/>
	<ServiceCard
		icon={BrainCircuit}
		subtitle="Integrate cutting edge AI tech into your application."
		title="Artificial Intelligence"
	/>
</div>
