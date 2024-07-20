<script>
	import { Mail, Linkedin, Github } from 'lucide-svelte';
	import HorizontalStack from '$lib/components/layout/stacks/stack-horizontal.svelte';
	import Icon from '$lib/components/text/icon.svelte';
</script>

<HorizontalStack>
	<a
		href="mailto:me@jackreimers.dev"
		class="rounded bg-blue-900 p-2 text-white transition-colors duration-200 mhover:hover:bg-blue-950 sm:p-3"
	>
		<Mail strokeWidth={2} />
	</a>
	<a
		href="https://www.linkedin.com/in/jackreimers/"
		target="_blank"
		class="rounded bg-blue-900 p-2 text-white transition-colors duration-200 mhover:hover:bg-blue-950 sm:p-3"
	>
		<Linkedin strokeWidth={2} />
	</a>
	<a
		href="https://github.com/jackreimers"
		target="_blank"
		class="rounded bg-blue-900 p-2 text-white transition-colors duration-200 mhover:hover:bg-blue-950 sm:p-3"
	>
		<Github strokeWidth={2} />
	</a>
</HorizontalStack>
