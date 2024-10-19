<script lang="ts">
	import { Bug, GaugeCircle, HardDriveUpload, Shield } from 'lucide-svelte';
	import ServiceCard from '$lib/components/cards/service/service-card.svelte';
</script>

<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 xl:grid-cols-4">
	<ServiceCard
		icon={Shield}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Security Updates"
	/>
	<ServiceCard
		icon={HardDriveUpload}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Content Updates"
	/>
	<ServiceCard
		icon={GaugeCircle}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Performance Optimisation"
	/>
	<ServiceCard
		icon={Bug}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Bug Fixes"
	/>
</div>
