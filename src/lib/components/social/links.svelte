<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';

	export let classes: string = '';
</script>

<div class="flex flex-wrap gap-2 {classes}">
	<a
		class="flex items-center rounded-full bg-blue-100 px-3.5 py-2.5 text-sm text-blue-900 transition-colors duration-300 mhover:hover:bg-blue-200"
		href="mailto:me@jackreimers.dev"
	>
		<Mail size="1.25rem" />
		<span class="mx-1.5 font-medium">me@jackreimers.dev</span>
	</a>
	<a
		class="flex items-center rounded-full bg-blue-100 p-2.5 text-sm text-blue-900 transition-colors duration-300 mhover:hover:bg-blue-200"
		href="https://www.linkedin.com/in/jackreimers/"
		target="_blank"
	>
		<Linkedin size="1.25rem" />
	</a>

	<a
		class="flex items-center rounded-full bg-blue-100 p-2.5 text-sm text-blue-900 transition-colors duration-300 mhover:hover:bg-blue-200"
		href="https://github.com/jackreimers"
		target="_blank"
	>
		<Github size="1.25rem" />
	</a>
</div>
