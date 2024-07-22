<script>
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
</script>

<HorizontalStack>
	<a
		class="rounded bg-blue-900 p-2 text-white transition-colors duration-200 mhover:hover:bg-blue-950 sm:p-3"
		href="mailto:me@jackreimers.dev"
	>
		<Mail strokeWidth={2} />
	</a>
	<a
		class="rounded bg-blue-900 p-2 text-white transition-colors duration-200 mhover:hover:bg-blue-950 sm:p-3"
		href="https://www.linkedin.com/in/jackreimers/"
		target="_blank"
	>
		<Linkedin strokeWidth={2} />
	</a>
	<a
		class="rounded bg-blue-900 p-2 text-white transition-colors duration-200 mhover:hover:bg-blue-950 sm:p-3"
		href="https://github.com/jackreimers"
		target="_blank"
	>
		<Github strokeWidth={2} />
	</a>
</HorizontalStack>
