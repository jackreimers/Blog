<script lang="ts">
	import { CloudCog, Globe2, Mail, Workflow } from 'lucide-svelte';
	import ServiceCard from '$lib/components/cards/service/service-card.svelte';
</script>

<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 xl:grid-cols-4">
	<ServiceCard
		icon={CloudCog}
		subtitle="Reliable and scalable cloud hosting for your applications."
		title="Cloud Hosting"
	/>
	<ServiceCard
		icon={Globe2}
		subtitle="Get a custom domain to set you and your business apart."
		title="Custom Domains"
	/>
	<ServiceCard
		icon={Mail}
		subtitle="Professional email hosting to keep you connected."
		title="Email Hosting"
	/>
	<ServiceCard
		icon={Workflow}
		subtitle="Automate your workflows with continuous integration."
		title="Continuous Integration"
	/>
</div>
