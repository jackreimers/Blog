<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import PillButton from '$lib/components/buttons/button-pill.svelte';

	export let classes: string = '';
</script>

<div class="flex overflow-x-auto gap-1.5 {classes}">
	<PillButton
		bgColor="bg-blue-900"
		bgHoverColor="bg-blue-950"
		classes="!font-medium"
		color="text-white"
		href="mailto:me@jackreimers.dev"
		icon={Mail}
		iconSide="left"
		target="_blank"
		text="me@jackreimers.dev"
	/>
	<PillButton
		bgColor="bg-blue-900"
		bgHoverColor="bg-blue-950"
		color="text-white"
		href="https://www.linkedin.com/in/jackreimers/"
		icon={Linkedin}
		target="_blank"
	/>
	<PillButton
		bgColor="bg-blue-900"
		bgHoverColor="bg-blue-950"
		color="text-white"
		href="https://github.com/jackreimers"
		icon={Github}
		target="_blank"
	/>
</div>
