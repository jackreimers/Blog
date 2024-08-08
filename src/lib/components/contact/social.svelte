<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import HorizontalStack from '$lib/components/stacks/stack-horizontal.svelte';
	import Button from '$lib/components/buttons/button.svelte';
</script>

<HorizontalStack>
	<Button color="blueSolid" href="mailto:me@jackreimers.dev">
		<Mail />
	</Button>
	<Button color="blueSolid" href="https://www.linkedin.com/in/jackreimers/" target="_blank">
		<Linkedin />
	</Button>
	<Button color="blueSolid" href="https://github.com/jackreimers" target="_blank">
		<Github />
	</Button>
</HorizontalStack>
