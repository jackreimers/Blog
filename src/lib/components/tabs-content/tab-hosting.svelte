<script lang="ts">
	import { CloudCog, Globe2, Mail, Workflow } from 'lucide-svelte';
	import ServiceCard from '$lib/components/cards/service/service-card.svelte';
</script>

<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 xl:grid-cols-4">
	<ServiceCard
		icon={CloudCog}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Cloud Hosting"
	/>
	<ServiceCard
		icon={Globe2}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Custom Domains"
	/>
	<ServiceCard
		icon={Mail}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Email Hosting"
	/>
	<ServiceCard
		icon={Workflow}
		subtitle="Lorem ipsum odor amet, consectetuer adipiscing elit."
		title="Continuous Integration"
	/>
</div>
