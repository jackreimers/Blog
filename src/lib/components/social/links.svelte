<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';

	export let classes: string = '';
</script>

<div class="flex flex-wrap gap-1 {classes}">
	<a
		class="flex items-center rounded-full bg-blue-900 px-3.5 py-2 text-xs text-white transition-colors duration-300 focus:bg-blue-950 mhover:hover:bg-blue-950"
		href="mailto:me@jackreimers.dev"
	>
		<Mail class="h-4 w-4" />
		<span class="mx-1.5 font-medium">me@jackreimers.dev</span>
	</a>
	<a
		class="flex items-center rounded-full bg-blue-900 p-2 text-white transition-colors duration-300 focus:bg-blue-950 mhover:hover:bg-blue-950"
		href="https://www.linkedin.com/in/jackreimers/"
		target="_blank"
	>
		<Linkedin class="h-4 w-4" />
	</a>

	<a
		class="flex items-center rounded-full bg-blue-900 p-2 text-white transition-colors duration-300 focus:bg-blue-950 mhover:hover:bg-blue-950"
		href="https://github.com/jackreimers"
		target="_blank"
	>
		<Github class="h-4 w-4" />
	</a>
</div>
