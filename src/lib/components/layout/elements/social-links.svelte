<script>
	import { Github, Linkedin } from 'lucide-svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<HorizontalStack>
	<a
		href="mailto:me@jackreimers.dev"
		class="rounded bg-blue-900 p-3 text-white transition-colors duration-200 hover:bg-blue-950"
	>
		<Icon icon="mail" weight={400} />
	</a>
	<a
		href="https://www.linkedin.com/in/jackreimers/"
		target="_blank"
		class="rounded bg-blue-900 p-3 text-white transition-colors duration-200 hover:bg-blue-950"
	>
		<Linkedin strokeWidth={2} />
	</a>
	<a
		href="https://github.com/jackreimers"
		target="_blank"
		class="rounded bg-blue-900 p-3 text-white transition-colors duration-200 hover:bg-blue-950"
	>
		<Github strokeWidth={2} />
	</a>
</HorizontalStack>
