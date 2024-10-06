<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	export let classes: string = '';
</script>

<div class="flex gap-1.5 overflow-x-auto {classes}">
	<PillButton
		color="darkBlue"
		href="mailto:me@jackreimers.dev"
		icon={Mail}
		target="_blank"
		text="me@jackreimers.dev"
	/>
	<PillButton
		color="darkBlue"
		href="https://www.linkedin.com/in/jackreimers/"
		icon={Linkedin}
		target="_blank"
	/>
	<PillButton
		color="darkBlue"
		href="https://github.com/jackreimers"
		icon={Github}
		target="_blank"
	/>
</div>
