<script lang="ts">
	import { Bug, GaugeCircle, HardDriveUpload, Shield } from 'lucide-svelte';
	import ServiceCard from '$lib/components/cards/service/service-card.svelte';
</script>

<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 xl:grid-cols-4">
	<ServiceCard
		icon={Shield}
		subtitle="Keep your website secure with regular security updates."
		title="Security Updates"
	/>
	<ServiceCard
		icon={HardDriveUpload}
		subtitle="Worry free content updates to keep your users engaged."
		title="Content Updates"
	/>
	<ServiceCard
		icon={GaugeCircle}
		subtitle="Ensure your application is performing at its best."
		title="Performance Optimisation"
	/>
	<ServiceCard
		icon={Bug}
		subtitle="Fix those annoying bugs that are causing you headaches."
		title="Bug Fixes"
	/>
</div>
